import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  SERVER_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

    public getUsers() {
      return this.http.get(`${this.SERVER_URL}/login/auth`)
  }
}
