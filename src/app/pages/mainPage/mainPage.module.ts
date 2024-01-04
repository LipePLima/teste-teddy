import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './mainPage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent,
  ]
})

export class MainPageModule { }