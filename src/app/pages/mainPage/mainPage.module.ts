import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CompaniesModule } from '../companies/companies.module';
import { PartnersModule } from '../partners/partners.module';

import { MainPageComponent } from './mainPage.component';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { ShareButtonComponent } from '../../components/shareButton/shareButton.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CompaniesModule,
    PartnersModule
  ],
  declarations: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    ShareButtonComponent,
  ],
  exports: [
  ]
})

export class MainPageModule { }
