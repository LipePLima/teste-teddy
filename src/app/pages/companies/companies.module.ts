import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CompaniesComponent } from './companies.component';
import { FormCompaniesComponent } from '../../components/formCompanies/formCompanies.component';
import { TableCompanieComponent } from '../../components/tableCompanie/tableCompanie.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    declarations: [
      CompaniesComponent,
      FormCompaniesComponent,
      TableCompanieComponent,
    ],
    exports: [
    ]
  })
  
  export class CompaniesModule { }