import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { DataCompanies } from 'src/app/types/dataCompanies';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public dataCompanies: DataCompanies[] = []; // Lista de objetos de cada companie

  public listPages: number[] = [1]; // Lista de botões
  public page: number        = 1;   // Número da página atual da tabela
  public count: number       = 1;   // Número total de botões
  private subten: number     = 10;  // Subtrair pelo número de itens na lista dataCompanies

  constructor(
    private CompaniesService: CompaniesService,
  ) { }

  ngOnInit(): void {
    this.CompaniesService.getCompanies().subscribe((data) => {
      for(let companie of data) {
        const dataCompanie: DataCompanies = {
          id: companie.id,
          name: companie.companyName,
          collaboratorsCount: companie.collaboratorsCount,
          createdAt: new Date(companie.createdAt).toLocaleDateString(),
          isActive: companie.isActive
        }

        this.dataCompanies.push(dataCompanie)
        this.addButton()
      }
    });
  }

  // função para adicionar um botão para cada 11 companies
  addButton() {
    if(this.dataCompanies.length - this.subten == 1) {
      this.count++
      this.subten += 10

      this.listPages.push(this.count)
    }
  }

  // função para ir para a próxima página
  nextPage() {
    this.page++;
  }

  // função para ir para a página anterior
  previousPage() {
    this.page--;
  }
}
