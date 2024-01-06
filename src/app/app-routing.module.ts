import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/mainPage/mainPage.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'mainPage', 
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'companies',
        pathMatch: 'full'
      },
      {
        path: 'companies',
        component: CompaniesComponent
      },
      {
        path: 'partners',
        component: PartnersComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ] 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
