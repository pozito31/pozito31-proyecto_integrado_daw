import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ServicioRestNoticiasService } from '../../servicios/servicio-rest-noticias.service';
import { DatosProtegidosService } from "../../servicios/datos-protegidos.service";
import { Noticias, datosDevueltos } from '../../interfaces/noticias';
import { Router } from '@angular/router';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.sass']
})
export class NoticiasComponent implements OnInit {

  constructor(private http: HttpClient) {}

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
    
  }

}
