import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private TOKEN_KEY = 'jwt_token';

  private token = this.getToken();

  SERVER_URL = 'http://localhost:8080/api'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`

    })
  };

  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public register(name: string, email: string, password: string): Observable<any> {
    const data = {
      name: name,
      email: email,
      password: password
    };
    return this.http.post(`${this.SERVER_URL}/register`, data, this.httpOptions)
  }

  public login(email: string, password: string): Observable<void> {
    const data = {
      email: email,
      password: password
    };
    return this.http.post(`${this.SERVER_URL}/login`, data, this.httpOptions)
      .pipe(
        map((response: any) => {
          if (response && response.token) {
            localStorage.setItem('jwt_token', response.token);
          } else {
            throw new Error('Token JWT não encontrado na resposta.');
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('jwt_token');
  }
}
