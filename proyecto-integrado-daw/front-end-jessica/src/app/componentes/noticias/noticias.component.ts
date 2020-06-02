import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicioRestNoticiasService } from '../../servicios/servicio-rest-noticias.service';
import { Noticias } from '../../interfaces/noticias';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.sass']
})
export class NoticiasComponent implements OnInit {
  constructor(private http: HttpClient, noticiasService: ServicioRestNoticiasService) {}

  NoticiasFormulario: FormGroup;


  ngOnInit(): void {
    this.NoticiasFormulario = new FormGroup({
      'titulo': new FormControl('', [
         Validators.required,
         Validators.minLength(4)
      ]),
      'descripcion': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'texto': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'imagen': new FormControl('', [
        Validators.required
      ])
    });
  }

  get titulo() { return this.NoticiasFormulario.get('titulo') }
  get descripcion() { return this.NoticiasFormulario.get('descripcion') }
  get texto() { return this.NoticiasFormulario.get('texto') }
  get imagen() { return this.NoticiasFormulario.get('imagen') }

  onSubmit() {
    console.log(this.NoticiasFormulario.value);
    this.http.post('http://pi.diiesmurgi.org/~jessica/REST_API/api/v1/noticias', {
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    })
  }

}
