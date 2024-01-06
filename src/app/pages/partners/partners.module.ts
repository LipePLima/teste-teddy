import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PartnersComponent } from './partners.component';
import { FormPartnersComponent } from '../../components/formPartners/formPartners.component';
import { TablePartnersComponent } from '../../components/tablePartners/tablePartners.component';


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    declarations: [
      PartnersComponent,
      FormPartnersComponent,
      TablePartnersComponent
    ],
    exports: [
    ]
  })
  
  export class PartnersModule { }