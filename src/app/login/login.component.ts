import {Component} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = 'Failed';

  login(email: string, password: string) {
    this.auth.login(email, password).subscribe(
      (data) => {
        this.isSuccessful = true
        this.isSignUpFailed = false
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
