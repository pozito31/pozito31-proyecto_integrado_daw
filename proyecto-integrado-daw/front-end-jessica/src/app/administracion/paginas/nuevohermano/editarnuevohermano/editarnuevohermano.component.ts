import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Nuevohermano , datosDevueltos } from '../../../../interfaces/nuevohermano';
import { Observable, throwError } from 'rxjs';
import { ServicioRestNuevohermanoService } from '../../../../servicios/servicio-rest-nuevohermano.service';

@Component({
  selector: 'app-editarnuevohermano',
  templateUrl: './editarnuevohermano.component.html',
  styleUrls: ['./editarnuevohermano.component.sass']
})
export class EditarnuevohermanoComponent implements OnInit {

  constructor(private ServicioRestNuevohermanoService: ServicioRestNuevohermanoService) { }
  editarHermano: Nuevohermano = {
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
    this.editarHermano.id_nuevohermano = this.NuevohermanoFormulario.get("id_nuevohermano").value;
    this.editarHermano.nombre = this.NuevohermanoFormulario.get("nombre").value;
    this.editarHermano.primerapellido = this.NuevohermanoFormulario.get("primerapellido").value;
    this.editarHermano.segundoapellido = this.NuevohermanoFormulario.get("segundoapellido").value;
    this.editarHermano.dni = this.NuevohermanoFormulario.get("dni").value;
    this.editarHermano.correoelectronico = this.NuevohermanoFormulario.get("correoelectronico").value;
    this.editarHermano.telefono = this.NuevohermanoFormulario.get("telefono").value;
    console.log(this.NuevohermanoFormulario);
    this.ServicioRestNuevohermanoService.editarNuevohermano(this.editarHermano).subscribe();
  }


}
