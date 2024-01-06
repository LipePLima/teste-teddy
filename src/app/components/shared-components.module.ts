import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


import { ShareButtonComponent } from './shareButton/shareButton.component';
import { FooterComponent } from './footer/footer.component';
import { FormCompaniesComponent } from './formCompanies/formCompanies.component';
import { FormPartnersComponent } from './formPartners/formPartners.component';
import { HeaderComponent } from './header/header.component';
import { TableCompanieComponent } from './tableCompanie/tableCompanie.component';
import { TablePartnersComponent } from './tablePartners/tablePartners.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormCompaniesComponent,
    FormPartnersComponent,
    TableCompanieComponent,
    TablePartnersComponent,
    ShareButtonComponent,
    AboutComponent,
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    FormCompaniesComponent,
    FormPartnersComponent,
    TableCompanieComponent,
    TablePartnersComponent,
    ShareButtonComponent,
    AboutComponent,
  ]
})

export class SharedComponentsModule { }
