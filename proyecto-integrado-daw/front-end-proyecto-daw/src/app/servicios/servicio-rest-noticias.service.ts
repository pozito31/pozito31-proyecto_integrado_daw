import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DatosProtegidosService } from "./datos-protegidos.service";
import { datosDevueltos } from '../interfaces/noticias';

@Injectable({
  providedIn: 'root'
})
export class ServicioRestNoticiasService {

  constructor(private http: HttpClient, private direcciones : DatosProtegidosService) { }

  ObtenerNoticias(){
    return this.http.get<datosDevueltos>('http://pi.diiesmurgi.org/~jessica/REST_API/api/v1/noticias') 
    .pipe(
      retry(3), // si ocurre un error lo volvemos a intentar hasta tres veces
      catchError(this.handleError) // Gestionar el error
    );
  }

  ObtenerNoticia(id_noticia:number){
    return this.http.get<datosDevueltos>('http://pi.diiesmurgi.org/~jessica/REST_API/api/v1/noticias'+'/'+id_noticia);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ha ocurrido un error en el cliente o en la red:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `El servidor ha devuelto el código de error ${error.status}, ` +
        `el contenido del error es: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Ha ocurrido un problema; por favor vuelve a intentarlo más tarde.');
  };
}