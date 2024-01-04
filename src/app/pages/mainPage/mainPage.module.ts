import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './mainPage.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShareButtonComponent } from '../../components/shareButton/shareButton.component';
import { TableComponent } from 'src/app/components/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    ShareButtonComponent,
    TableComponent
  ],
  exports: []
})

export class MainPageModule { }
