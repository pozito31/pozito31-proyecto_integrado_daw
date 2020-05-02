import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { isNullOrUndefined } from "util";
import { map, pluck, share, shareReplay, tap } from 'rxjs/operators';

import { UserInterface } from "../interfaces/user-interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registroUser(nombre: string, apellidos: string, usuario: string, password: string){
    const url_api = "";
    return this.http
    .post<UserInterface>(
      url_api,
      {
        nombre: nombre,
        apellidos: apellidos,
        usuario: usuario,
        password: password
      }
    )
  }

  loginUser(usuario: string, password: string): Observable<any> {
    const url_api = "";
    return this.http
      .post<UserInterface>(
        url_api,
        {
          usuario,
          password
        }
      )
  }

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = "";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post<UserInterface>(url_api, { headers: this.headers });
  }
}
