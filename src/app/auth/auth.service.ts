import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { loginForm, signupForm } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuntenticated: boolean = false;


  constructor() { }

  login(form: loginForm) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('Welcome');
        this.isAuntenticated = true;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Invalid');
        this.isAuntenticated = false;
      });
  }

  register(signupForm: signupForm) {
    console.log('ENTERING');
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, signupForm.email, signupForm.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('registerd', user);


        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }
}
