import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { deleteData } from '../../types/deleteData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public menuNav = [
    {menu: 'Parceiros', router: 'mainPage/partners'}, 
    {menu: 'Empresas Externas', router: 'mainPage/companies'}, 
    {menu: 'Sobre', router: 'mainPage/about'}
  ]

  constructor(
    private router: Router,
    private cookieService: CookieService, 
  ) { }

  ngOnInit() {
  }

  public logout(): void {
    deleteData(this.cookieService)
    this.router.navigate(['/login']);
  }
}
