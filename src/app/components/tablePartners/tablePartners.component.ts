import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { PartnersService } from '../../services/partners.service';
import { FormData } from '../../types/formData';
import { DataPartners } from 'src/app/types/dataPartners';

@Component({
  selector: 'app-table',
  templateUrl: './tablePartners.component.html',
  styleUrls: ['./tablePartners.component.scss']
})

export class TablePartnersComponent implements OnInit {
  @Output() newSendData               = new EventEmitter<DataPartners>();
  @Input() formInfo: FormData[]       = []; // Lista de objetos de cada campo de formulário para edição de dados de uma partners
  public dataPartners: DataPartners[] = []; // Lista de objetos de cada partners
  
  public showField: boolean  = false; // Variável para exibir sessão de edição de dados de uma partners na tabela quando for true
  public listPages: number[] = [1];   // Lista de botões
  public page: number        = 1;     // Número da página atual da tabela
  public count: number       = 1;     // Número total de botões
  private subten: number     = 10;    // Subtrair pelo número de itens na lista datapartners
  private numberId: number   = 0;     // Id do elemento clicado 
  
  public formCliente!: FormGroup;

  constructor(
    private PartnersService: PartnersService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // Requisição dos partners pelo método GET
    this.PartnersService.getPartners().subscribe(
      (data: any) => {
        console.log(data)
        this.addPartnerInDataPartners(data)

      },
      error => console.error(error)
    );

    // Validação de formulário reativo
    this.formCliente = this.fb.group({
      name: ['', Validators.required],
      collaborator: ['', Validators.required],
      date: ['', [Validators.required]],
      status: ['', Validators.required]
    });
  }

  // função para adicionar partners no array dataPartners
  private addPartnerInDataPartners(data: any): void { 
    for(let partner of data) {
      const dataCompanie: DataPartners = {
        id: partner.id,
        name: partner.name,
        description: partner.description,
        repositoryGit: partner.repositoryGit,
        urlDoc: partner.urlDoc
      }

      this.newSendData.emit(dataCompanie)
      this.dataPartners.push(dataCompanie)
      this.addButton();
    }
  }

  // Função para exibir a sessão de alteração de dados de um partner
  showChange(id: number) {
    this.showField = true;

    this.saveId(id)
  }

  // Função para fechar o campo de edição ao atualizar o partner
  private closeField() {
    this.showField = false;
  }

  // Função para armazenar o id capturado pela função showChange
  private saveId(id: number) {
    this.numberId = id
  }

  // Função para alteração dados de uma companie na tabela
  public changeRow(f: FormGroupDirective) {
    const changeCompanie: DataPartners = {
      id: this.numberId,
      name: f.value.name,
      description: f.value.date,
      repositoryGit: f.value.collaborator,
      urlDoc: f.value.status
    }

    this.changeData(changeCompanie)
  }

  // Função para atualizar dados de uma companie na API
  private changeData(newCompanie: DataPartners) {
    this.PartnersService.putPartners(this.numberId, newCompanie).subscribe(
      data => {
        this.findCompanie(newCompanie)
        this.closeField()
      },
      error => console.error(error)
    )
  }

  // Função de busca para localizar a companie que irá receber alterações
  private findCompanie(newCompanie: DataPartners) {
    const index = this.dataPartners.findIndex(obj => obj.id === this.numberId);

    if (index !== -1) {
      let updatedObj = { ...this.dataPartners[index], ...newCompanie };
      this.dataPartners[index] = updatedObj;
    }
  }
 
  // função que deleta a companie selecionada da api
  public deleteData(id: number): void {
    this.PartnersService.deletePartners(id).subscribe(
      data  => {
        this.deleteRow(id)
      },
      error => console.error(error)
    )
  }

  // função que remove instantaneamente a companie da tabela
  private deleteRow(id: number) {
    this.dataPartners = this.dataPartners.filter( item => {
      return item.id !== id;
    })
  }

  // função para adicionar um botão para cada 11 partners
  private addButton() {
    if(this.dataPartners.length - this.subten == 1) {
      this.count++
      this.subten += 10

      this.listPages.push(this.count)
    }
  }

  // função para ir para a próxima página da tabela
  public nextPage() {
    this.page++;
  }

  // função para ir para a página anterior da tabela
  public previousPage() {
    this.page--;
  }
}
