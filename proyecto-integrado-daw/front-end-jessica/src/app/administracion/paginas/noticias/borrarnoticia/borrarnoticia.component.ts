import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicioRestNoticiasService } from '../../../../servicios/servicio-rest-noticias.service';
import { Noticias } from '../../../../interfaces/noticias';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-borrarnoticia',
  templateUrl: './borrarnoticia.component.html',
  styleUrls: ['./borrarnoticia.component.sass']
})
export class BorrarnoticiaComponent implements OnInit {

  constructor(private ServicioRestNoticiasService: ServicioRestNoticiasService) { }
  borrarNoticia: Noticias = {
    id_noticia: 0,
    titulo: "a",
    descripcion: "a",
    texto: "a",
    directorio_noticia: "a",
    imagen: "a",
    usuarios_id_usuario: 0
  };

  NoticiasFormulario: FormGroup;

  ngOnInit(): void {
    this.NoticiasFormulario = new FormGroup({
      'id_noticia': new FormControl('', [
        Validators.required
     ]),
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

  get id_noticia() { return this.NoticiasFormulario.get('id_noticia') }
  get titulo() { return this.NoticiasFormulario.get('titulo') }
  get descripcion() { return this.NoticiasFormulario.get('descripcion') }
  get texto() { return this.NoticiasFormulario.get('texto') }
  get imagen() { return this.NoticiasFormulario.get('imagen') }

  onSubmit() {
    this.borrarNoticia.id_noticia = this.NoticiasFormulario.get("id_noticia").value;
    this.borrarNoticia.titulo = this.NoticiasFormulario.get("titulo").value;
    this.borrarNoticia.descripcion = this.NoticiasFormulario.get("descripcion").value;
    this.borrarNoticia.texto = this.NoticiasFormulario.get("texto").value;
    this.borrarNoticia.imagen = this.NoticiasFormulario.get("imagen").value;
    console.log(this.NoticiasFormulario);
    this.ServicioRestNoticiasService.borrarNoticia(this.borrarNoticia.id_noticia).subscribe();
  }

}
