import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

import { CompaniesComponent } from './companies.component';

@NgModule({
    imports: [
      CommonModule,
      SharedComponentsModule
    ],
    declarations: [
      CompaniesComponent,
    ],
    exports: [
    ]
  })
  
  export class CompaniesModule { }