import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicioRestNoticiasService } from '../../servicios/servicio-rest-noticias.service';
import { Noticias, datosDevueltos } from '../../interfaces/noticias';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.sass']
})
export class NoticiasComponent implements OnInit {

  constructor(private ServicioRestNoticiasService: ServicioRestNoticiasService) {}
  nuevaNoticia: Noticias = {
    id_noticia: 0,
    titulo: "a",
    descripcion: "a",
    texto: "a",
    estado: "a",
    directorio_noticia: "a",
    imagen: "a",
    usuarios_id_usuario: 0
  };

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
    this.nuevaNoticia.titulo = this.NoticiasFormulario.get("titulo").value;
    this.nuevaNoticia.descripcion = this.NoticiasFormulario.get("descripcion").value;
    this.nuevaNoticia.texto = this.NoticiasFormulario.get("texto").value;
    this.nuevaNoticia.imagen = this.NoticiasFormulario.get("imagen").value;
    console.log(this.NoticiasFormulario);
    this.ServicioRestNoticiasService.añadirNoticia(this.nuevaNoticia).subscribe();
  }
}
