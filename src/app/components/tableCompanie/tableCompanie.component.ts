import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CompaniesService } from '../../services/companies.service';
import { DataCompanies } from '../../types/dataCompanies';
import { FormData } from '../../types/formData';

@Component({
  selector: 'app-tableCompanie',
  templateUrl: './tableCompanie.component.html',
  styleUrls: ['./tableCompanie.component.scss']
})
export class TableCompanieComponent implements OnInit {
  @Output() newSendData                 = new EventEmitter<DataCompanies>();
  @Input() formInfo: FormData[]         = []; // Lista de objetos de cada campo de formulário para edição de dados de uma companie
  public dataCompanies: DataCompanies[] = []; // Lista de objetos de cada companie
  public titleColumn = [
    "Id",
    "Nome",
    "Número de Colaboradores",
    "Data de Abertura",
    "Status",
    "Ações",
  ]
  
  public showField: boolean  = false; // Variável para exibir sessão de edição de dados de uma companie na tabela quando for true
  public listPages: number[] = [1];   // Lista de botões
  public page: number        = 1;     // Número da página atual da tabela
  public count: number       = 1;     // Número total de botões
  private subten: number     = 10;    // Subtrair pelo número de itens na lista dataCompanies
  private numberId: number   = 0;     // Id do elemento clicado 
  
  public formCliente!: FormGroup;

  constructor(
    private CompaniesService: CompaniesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // Requisição das companies pelo método GET
    this.CompaniesService.getCompanies().subscribe(
      (data) => {
        this.addCompanieInDataCompanies(data)

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

  // função para adicionar companies no array dataCompanies
  private addCompanieInDataCompanies(data: any): void { 
    for(let companie of data) {
      const dataCompanie: DataCompanies = {
        id: companie.id,
        companyName: companie.companyName,
        collaboratorsCount: companie.collaboratorsCount,
        createdAt: new Date(companie.createdAt).toLocaleDateString(),
        isActive: companie.isActive
      }

      this.newSendData.emit(dataCompanie)
      this.dataCompanies.push(dataCompanie)
      this.addButton();
    }
  }

  // Função para exibir a sessão de alteração de dados de uma companie
  showChange(id: number) {
    this.showField = true;

    this.saveId(id)
  }

  // Função para fechar o campo de edição ao atualizar a companie
  private closeField() {
    this.showField = false;
  }

  // Função para armazenar o id capturado pela função showChange
  private saveId(id: number) {
    this.numberId = id
  }

  // Função para alteração dados de uma companie na tabela
  public changeRow(f: FormGroupDirective) {
    const changeCompanie: DataCompanies = {
      id: this.numberId,
      collaboratorsCount: Number(f.value.collaborator),
      companyName: f.value.name,
      createdAt: f.value.date,
      isActive: this.convertToBoolean(f.value.status)
    }

    this.changeData(changeCompanie)
  }

  // Função para atualizar dados de uma companie na API
  private changeData(newCompanie: DataCompanies) {
    this.CompaniesService.putCompanies(this.numberId, newCompanie).subscribe(
      data => {
        this.findCompanie(newCompanie)
        this.closeField()
      },
      error => console.error(error)
    )
  }

  // Função de busca para localizar a companie que irá receber alterações
  private findCompanie(newCompanie: DataCompanies) {
    const index = this.dataCompanies.findIndex(obj => obj.id === this.numberId);

    if (index !== -1) {
      let updatedObj = { ...this.dataCompanies[index], ...newCompanie };
      this.dataCompanies[index] = updatedObj;
    }
  }

  // Função para converter o valor string da opction de select em boolean
  convertToBoolean(input: string): boolean {
    return JSON.parse(input.toLowerCase());
  }
 
  // função que deleta a companie selecionada da api
  public deleteData(id: number): void {
    this.CompaniesService.deleteCompanie(id).subscribe(
      data  => {
        this.deleteRow(id)
      },
      error => console.error(error)
    )
  }

  // função que remove instantaneamente a companie da tabela
  private deleteRow(id: number) {
    this.dataCompanies = this.dataCompanies.filter( item => {
      return item.id !== id;
    })
  }

  // função para adicionar um botão para cada 11 companies
  private addButton() {
    if(this.dataCompanies.length - this.subten == 1) {
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
