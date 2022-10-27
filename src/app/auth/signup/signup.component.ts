import { Component, OnInit } from '@angular/core';
import { signupForm } from 'src/app/interfaces/auth';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  signupForm: signupForm = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  isPasswordMatched: boolean = true;

  ngOnInit(): void {
  }


  register() {
    //NOTE: checking password match
    if (this.signupForm.password != this.signupForm.confirmPassword) {
      this.isPasswordMatched = false;
      return;
    }
    this.authservice.register(this.signupForm);




  }



}
