import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Token} from "@angular/compiler";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: AuthService, private router: Router) {
  }

  email: string = ''
  password: string = ''

  isSignUpFailed = false;
  errorMessage = 'Failed';


  login() {
    this.auth.login(this.email, this.password).subscribe(
      () => {
        localStorage.setItem('jwt_token', this.auth.getToken()!!);
        this.router.navigate(['/']);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
