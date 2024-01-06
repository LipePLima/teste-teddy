import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesModule } from '../companies/companies.module';
import { PartnersModule } from '../partners/partners.module';

import { MainPageComponent } from './mainPage.component';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedComponentsModule,
    CompaniesModule,
    PartnersModule
  ],
  declarations: [
    MainPageComponent,
  ],
  exports: [
  ]
})

export class MainPageModule { }
