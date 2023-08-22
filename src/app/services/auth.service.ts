import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  SERVER_URL = 'http://localhost:8080/api'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  constructor(private http: HttpClient) {}

    public getUsers() {
      return this.http.get(`${this.SERVER_URL}/login/auth`)
  }

  public register(name: string, email: string, password: string): Observable<any> {
    const data = {
      name: name,
      email: email,
      password: password
    };
    return this.http.post(`${this.SERVER_URL}/register`, data, this.httpOptions)
  }

  public login(email: string, password: string): Observable<any> {
    const data = {
      email: email,
      password: password
    };
    return this.http.post(`${this.SERVER_URL}/login`, data, this.httpOptions)
  }
}
