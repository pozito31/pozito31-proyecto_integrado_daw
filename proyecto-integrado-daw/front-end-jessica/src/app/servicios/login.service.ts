import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuarios } from '../interfaces/usuarios';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http: HttpClient) {
    
  }
  
  login(UserLogin:Usuarios): Observable<{}>{
    return this.http.post('http://pi.diiesmurgi.org/~jessica/rest-api/api/v1/login', UserLogin, httpOptions);
  }
  
}
