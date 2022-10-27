import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { loginForm, signupForm } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuntenticated: boolean = false;


  constructor(private router: Router) { }

  login(form: loginForm) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isAuntenticated = true;
        // Navigate to main page after login
        this.router.navigate(['']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuntenticated = false;
        alert('Invalid Credentials!! Please retry');
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


  logout() {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
      this.isAuntenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }
}
