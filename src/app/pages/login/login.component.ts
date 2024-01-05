import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../../types/user'
import { deleteData } from '../../types/deleteData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public isChecked   = false; 
  public emptyFields = false;
  public user: User  = {
    user: '',
    password: '',
    
  };

  constructor(
    private router: Router,
    private cookieService: CookieService,  
  ) { }

  ngOnInit(): void {
    const cookieValues = {
      cookieUSername: this.cookieService.get('username'),
      cookiePassword: this.cookieService.get('password'),

    };

    if (Object.values(cookieValues).every(value => value !== '')) {
      this.router.navigate(['/mainPage']);

    } 
  }

  public login(user: string, password: string): void {
    if (user && password) {
      this.router.navigate(['/mainPage']);
      this.showError(false);

    } else {
      this.showError(true);
      
    }
  }

  public showError(value: boolean): void {
    this.emptyFields = value
  }

  public saveData(event: boolean): void {
    if(event) {
      this.cookieService.set('username', this.user.user);
      this.cookieService.set('password', this.user.password);
      this.cookieService.set('checkbox', `${event}`);

    } else {
      deleteData(this.cookieService)

    }
  }
}
