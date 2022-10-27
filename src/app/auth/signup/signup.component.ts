import { Component, OnInit } from '@angular/core';
import { signupForm } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  signupForm: signupForm = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit(): void {
  }


  register() {
    console.log('Registered', this.signupForm);

  }

}
