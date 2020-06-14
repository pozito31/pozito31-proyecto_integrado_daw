import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuarios } from '../interfaces/usuarios';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) {}
  
}
