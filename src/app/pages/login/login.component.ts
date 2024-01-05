import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../../types/user'

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
    password: ''
  };

  constructor(
    private router: Router,
    private cookieService: CookieService,  
  ) { }

  ngOnInit(): void {
    const cookieValues = {
      cookieUSername: this.cookieService.get('username'),
      cookiePassword: this.cookieService.get('password')
    };

    if (Object.values(cookieValues).every(value => value !== '')) {
      if(!this.user.user && !this.user.password) {
        this.user.user     = cookieValues.cookieUSername;
        this.user.password = cookieValues.cookiePassword; 

      }
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
      this.cookieService.delete('username');
      this.cookieService.delete('password');
      this.cookieService.delete('checkbox');

    }
  }
}
