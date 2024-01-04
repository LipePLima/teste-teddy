import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../types/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public emptyFields = false
  public user: User  = {
    user: '',
    password: ''
  };

  constructor(private router: Router) { }

  public login(user: string, password: string): void {
    if (user && password) {
      this.router.navigate(['/mainPage']);
      this.emptyFields = false;

    } else {
      this.emptyFields = true;
      
    }
  }

}
