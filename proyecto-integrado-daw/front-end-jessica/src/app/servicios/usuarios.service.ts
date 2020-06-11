import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Usuarios[]>('http://pi.diiesmurgi.org/~jessica/REST_API/api/v1/usuarios');
  }
}
