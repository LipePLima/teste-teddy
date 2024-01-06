import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { ShareButtonComponent } from './shareButton/shareButton.component';
import { FooterComponent } from './footer/footer.component';
import { FormCompaniesComponent } from './formCompanies/formCompanies.component';
import { FormPartnersComponent } from './formPartners/formPartners.component';
import { HeaderComponent } from './header/header.component';
import { TableCompanieComponent } from './tableCompanie/tableCompanie.component';
import { TablePartnersComponent } from './tablePartners/tablePartners.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormCompaniesComponent,
    FormPartnersComponent,
    TableCompanieComponent,
    TablePartnersComponent,
    ShareButtonComponent,

   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    FormCompaniesComponent,
    FormPartnersComponent,
    TableCompanieComponent,
    TablePartnersComponent,
    ShareButtonComponent,
  ]
})

export class SharedComponentsModule { }
