import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck, share, shareReplay, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string){

    console.log('Entra en login');
    
  }
  
}
