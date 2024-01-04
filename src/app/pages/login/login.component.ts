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
  public emptyFields = false
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
      this.user.user     = cookieValues.cookieUSername;
      this.user.password = cookieValues.cookiePassword;

    } 
  }

  public login(user: string, password: string): void {
    if (user && password) {
      this.router.navigate(['/mainPage']);
      this.emptyFields = false;

    } else {
      this.emptyFields = true;
      
    }
  }

  public saveData(): void {
      this.cookieService.set('username', this.user.user);
      this.cookieService.set('password', this.user.password);
  }
}
