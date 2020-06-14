import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Usuarios[]>(`${environment.apiUrl}/usuarios`);
  }

  register(usuarios: Usuarios) {
    return this.http.post(`${environment.apiUrl}/usuarios/register`, usuarios);
  }

  delete(id_usuario: number) {
    return this.http.delete(`${environment.apiUrl}/usuarios/${id_usuario}`);
  }
}
