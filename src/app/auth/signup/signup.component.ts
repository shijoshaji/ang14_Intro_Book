import { Component, OnInit } from '@angular/core';
import { signupForm } from 'src/app/interfaces/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

  isPasswordMatched: boolean = true;

  ngOnInit(): void {
  }


  register() {
    //NOTE: checking password match
    if (this.signupForm.password != this.signupForm.confirmPassword) {
      this.isPasswordMatched = false;
      return;
    }


    console.log('Registered', this.signupForm);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.signupForm.email, this.signupForm.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }



}
