import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './mainPage.component';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { CompaniesComponent } from '../companies/companies.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { FormCompaniesComponent } from '../../components/formCompanies/formCompanies.component';
import { TableCompanieComponent } from '../../components/tableCompanie/tableCompanie.component';
import { ShareButtonComponent } from '../../components/shareButton/shareButton.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    MainPageComponent,
    HeaderComponent,
    CompaniesComponent,
    FooterComponent,
    FormCompaniesComponent,
    TableCompanieComponent,
    ShareButtonComponent,
  ],
  exports: [
  ]
})

export class MainPageModule { }
