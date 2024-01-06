import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module'
import { MainPageModule } from './pages/mainPage/mainPage.module'
import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedComponentsModule,
    LoginModule,
    MainPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
