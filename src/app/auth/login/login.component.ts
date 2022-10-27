import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  // Note: not good way to create like this individually as we increse the form it will be hard
  // email: string = '';
  // password:string=''


  // NOTE: better way for forms

  loginForm: loginForm = {
    email: '',
    password: '',
  };

  ngOnInit(): void {
  }

  login() {
    console.log('LOGIN', this.loginForm);
  }

}
