import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../types/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user: User = {
    user: '',
    password: ''
  };

  public emptyFields = false

  constructor(private router: Router) { }

  login(user: string, password: string) {
    if (user && password) {
      this.router.navigate(['/nova-rota']);
      this.emptyFields = false;
      
    } else {
      this.emptyFields = true;
      
    }
  }
}
