import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersComponent } from './partners.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';


@NgModule({
    imports: [
      CommonModule,
      SharedComponentsModule
    ],
    declarations: [
      PartnersComponent,
    ],
    exports: [
    ]
  })
  
  export class PartnersModule { }