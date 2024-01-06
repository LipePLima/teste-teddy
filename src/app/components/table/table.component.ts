import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompaniesService } from '../../services/companies.service';
import { DataCompanies } from '../../types/dataCompanies';
import { FormData } from '../../types/formData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  @Input() formInfo: FormData[]         = []; // Lista de objetos de cada campo de formulário para edição de dados de uma companie
  public dataCompanies: DataCompanies[] = []; // Lista de objetos de cada companie
  
  public showField: boolean   = false;
  public listPages: number[]  = [1];  // Lista de botões
  public page: number         = 1;    // Número da página atual da tabela
  public count: number        = 1;    // Número total de botões
  private subten: number      = 10;   // Subtrair pelo número de itens na lista dataCompanies
  
  public formCliente!: FormGroup;

  constructor(
    private CompaniesService: CompaniesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CompaniesService.getCompanies().subscribe((data) => {
      this.addCompanieInDataCompanies(data)
    });

    this.formCliente = this.fb.group({
      name: ['', Validators.required],
      collaborator: ['', Validators.required],
      date: ['', [Validators.required]],
      status: ['', Validators.required]
    });
  }

  // função para adicionar um objeto contendo dados de um companie no array dataCompanies
  private addCompanieInDataCompanies(data: any): void { 
    for(let companie of data) {
      const dataCompanie: DataCompanies = {
        id: companie.id,
        name: companie.companyName,
        collaboratorsCount: companie.collaboratorsCount,
        createdAt: new Date(companie.createdAt).toLocaleDateString(),
        isActive: companie.isActive
      }

      this.dataCompanies.push(dataCompanie)
      this.addButton();
    }
  }

  showChange(id: number) {
    this.showField = true;
  }

  changeRow() {

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

  // função para ir para a próxima página
  public nextPage() {
    this.page++;
  }

  // função para ir para a página anterior
  public previousPage() {
    this.page--;
  }
}
