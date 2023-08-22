import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private auth: AuthService) {
  }

    name: string= ''
    email: string = ''
    password: string = ''

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = 'Failed';

  register() {
    this.auth.register(this.name, this.email, this.password).subscribe(
      (data) => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
