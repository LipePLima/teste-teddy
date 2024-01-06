import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { PartnersService } from '../../services/partners.service';
import { FormData } from '../../types/formData';
import { DataPartners } from 'src/app/types/dataPartners';

@Component({
  selector: 'app-tablePartners',
  templateUrl: './tablePartners.component.html',
  styleUrls: ['./tablePartners.component.scss']
})

export class TablePartnersComponent implements OnInit {
  @Output() newSendData               = new EventEmitter<DataPartners>();
  @Input() formInfo: FormData[]       = []; // Lista de objetos de cada campo de formulário para edição de dados de uma partners
  public dataPartners: DataPartners[] = []; // Lista de objetos de cada partners
  public titleColumn = [
    'Id',
    'Nome',
    'Descrição',
    'Link Repositório',
    'Link Documentação',
    'Ações'
  ]
  
  public showField: boolean  = false; // Variável para exibir sessão de edição de dados de uma partners na tabela quando for true
  public listPages: number[] = [1];   // Lista de botões   
  public page: number        = 1;  // Número da página atual da tabela
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
      description: ['', Validators.required],
      urlDoc: ['', [Validators.required]],
      repositoryGit: ['', Validators.required]
    });

    this.showSharedPage()
  }

  // função para adicionar partners no array dataPartners
  private addPartnerInDataPartners(data: any): void { 
    for(let partner of data) {
      const dataPartner: DataPartners = {
        id: partner.id,
        name: partner.name,
        description: partner.description,
        repositoryGit: partner.repositoryGit,
        urlDoc: partner.urlDoc
      }

      this.newSendData.emit(dataPartner)
      this.dataPartners.push(dataPartner)
      this.addButton();
    }
  }

  // Função para exibir a sessão de alteração de dados de um partner
  showChange(id: number): void {
    this.showField = true;

    this.saveId(id)
  }

  // Função para fechar o campo de edição ao atualizar o partner
  private closeField(): void {
    this.showField = false;
  }

  // Função para armazenar o id capturado pela função showChange
  private saveId(id: number): void {
    this.numberId = id
  }

  // Função para alteração dados de um partner na tabela
  public changeRow(f: FormGroupDirective): void {
    const changePartner: DataPartners = {
      id: this.numberId,
      name: f.value.name,
      description: f.value.description,
      repositoryGit: f.value.repositoryGit,
      urlDoc: f.value.urlDoc
    }

    console.log(f)
    console.log(changePartner)

    this.changeData(changePartner)
  }

  // Função para atualizar dados de uma partner na API
  private changeData(newPartner: DataPartners): void {
    this.PartnersService.putPartners(this.numberId, newPartner).subscribe(
      data => {
        this.findPartner(newPartner)
        this.closeField()
      },
      error => console.error(error)
    )
  }

  // Função de busca para localizar a partner que irá receber alterações
  private findPartner(newPartner: DataPartners): void {
    const index = this.dataPartners.findIndex(obj => obj.id === this.numberId);

    if (index !== -1) {
      let updatedObj = { ...this.dataPartners[index], ...newPartner };
      this.dataPartners[index] = updatedObj;
    }
  }
 
  // função que deleta a partner selecionada da api
  public deleteData(id: number): void {
    this.PartnersService.deletePartners(id).subscribe(
      data  => {
        this.deleteRow(id)
      },
      error => console.error(error)
    )
  }

  // função que remove instantaneamente a partner da tabela
  private deleteRow(id: number): void {
    this.dataPartners = this.dataPartners.filter( item => {
      return item.id !== id;
    })
  }

  // função para adicionar um botão para cada 11 partners
  private addButton(): void {
    if(this.dataPartners.length - this.subten == 1) {
      this.count++
      this.subten += 10

      this.listPages.push(this.count)
    }
  }

  // função para ir para a próxima página da tabela
  public nextPage(): void {
    this.page++;
  }

  // função para ir para a página anterior da tabela
  public previousPage(): void {
    this.page--;
  }

  // função de paginação da tabela de acordo com a url compartilhada
  showSharedPage(): void {
    const urlParams  = new URLSearchParams(window.location.search).get('page');
    const numberPage = Number(urlParams);

    if (numberPage && !isNaN(numberPage)) {
      this.page = numberPage
    }
  }
}
