import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { DataCompanies } from 'src/app/types/dataCompanies';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public dataCompanies: DataCompanies[] = [];

  constructor(
    private CompaniesService: CompaniesService,
  ) { }

  ngOnInit(): void {
    this.CompaniesService.getCompanies().subscribe((data) => {
      console.log(data)
      for(let companie of data) {
        const dataCompanie: DataCompanies = {
          id: companie.id,
          name: companie.companyName,
          collaboratorsCount: companie.collaboratorsCount,
          createdAt: new Date(companie.createdAt).toLocaleDateString(),
          isActive: companie.isActive
        }

        this.dataCompanies.push(dataCompanie)
      }
    });
  }


}
