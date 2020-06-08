import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Nuevohermano , datosDevueltos } from '../../../../interfaces/nuevohermano';
import { Observable, throwError } from 'rxjs';
import { ServicioRestNuevohermanoService } from '../../../../servicios/servicio-rest-nuevohermano.service';

@Component({
  selector: 'app-borrarnuevohermano',
  templateUrl: './borrarnuevohermano.component.html',
  styleUrls: ['./borrarnuevohermano.component.sass']
})
export class BorrarnuevohermanoComponent implements OnInit {

  constructor(private ServicioRestNuevohermanoService: ServicioRestNuevohermanoService) { }
  borrarHermano: Nuevohermano = {
    id_nuevohermano: 0,
    nombre: "a",
    primerapellido: "a",
    segundoapellido: "a",
    dni: "a",
    correoelectronico: "a",
    nacimiento: "a",
    telefono: "a",
    foto: "a"
  };

  NuevohermanoFormulario: FormGroup;

  ngOnInit(): void {
    this.NuevohermanoFormulario = new FormGroup({
      'id_nuevohermano': new FormControl('', [
        Validators.required
      ]),
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'primerapellido': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'segundoapellido': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'dni': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'correoelectronico': new FormControl('', [
         Validators.required,
         Validators.minLength(4) 
      ]),
      'telefono': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get id_nuevohermano() { return this.NuevohermanoFormulario.get('id_nuevohermano') }
  get nombre() { return this.NuevohermanoFormulario.get('nombre') }
  get primerapellido() { return this.NuevohermanoFormulario.get('primerapellido') }
  get segundoapellido() { return this.NuevohermanoFormulario.get('segundoapellido') }
  get dni() { return this.NuevohermanoFormulario.get('dni') }
  get correoelectronico() { return this.NuevohermanoFormulario.get('correoelectronico') }
  get telefono() { return this.NuevohermanoFormulario.get('telefono') }

  onSubmit() {
    this.borrarHermano.id_nuevohermano = this.NuevohermanoFormulario.get("id_nuevohermano").value;
    this.borrarHermano.nombre = this.NuevohermanoFormulario.get("nombre").value;
    this.borrarHermano.primerapellido = this.NuevohermanoFormulario.get("primerapellido").value;
    this.borrarHermano.segundoapellido = this.NuevohermanoFormulario.get("segundoapellido").value;
    this.borrarHermano.dni = this.NuevohermanoFormulario.get("dni").value;
    this.borrarHermano.correoelectronico = this.NuevohermanoFormulario.get("correoelectronico").value;
    this.borrarHermano.telefono = this.NuevohermanoFormulario.get("telefono").value;
    console.log(this.NuevohermanoFormulario);
    this.ServicioRestNuevohermanoService.borrarNuevohermano(this.borrarHermano.id_nuevohermano).subscribe();
  }
}
