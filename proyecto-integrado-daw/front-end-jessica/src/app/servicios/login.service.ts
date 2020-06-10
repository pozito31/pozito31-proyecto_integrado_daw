import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(usuario: string, password: string){
    return this.http.post<any>('http://pi.diiesmurgi.org/~jessica/REST_API/api/v1/usuarios', { usuario: usuario, password: password })
    .pipe(map(usuarios => {
      // login successful if there's a jwt token in the response
      if (usuarios && usuarios.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(usuarios));
      }

      return usuarios;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
