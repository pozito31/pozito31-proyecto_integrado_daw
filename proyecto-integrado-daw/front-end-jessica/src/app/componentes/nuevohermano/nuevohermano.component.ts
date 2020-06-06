import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Nuevohermano , datosDevueltos } from '../../interfaces/nuevohermano';
import { Observable, throwError } from 'rxjs';
import { ServicioRestNuevohermanoService } from '../../servicios/servicio-rest-nuevohermano.service';

@Component({
  selector: 'app-nuevohermano',
  templateUrl: './nuevohermano.component.html',
  styleUrls: ['./nuevohermano.component.sass']
})
export class NuevohermanoComponent implements OnInit {

  constructor(private ServicioRestNuevohermanoService: ServicioRestNuevohermanoService) { }
  nuevoHermano: Nuevohermano = {
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

  NuevoHermanoFormulario: FormGroup;

  ngOnInit(): void {
    this.NuevoHermanoFormulario = new FormGroup({
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
      'nacimiento': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'telefono': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'foto': new FormControl('', [
        Validators.required
      ])
    });
  }

  get nombre() { return this.NuevoHermanoFormulario.get('nombre') }
  get primerapellido() { return this.NuevoHermanoFormulario.get('primerapellido') }
  get segundoapellido() { return this.NuevoHermanoFormulario.get('segundoapellido') }
  get dni() { return this.NuevoHermanoFormulario.get('dni') }
  get correoelectronico() { return this.NuevoHermanoFormulario.get('correoelectronico') }
  get nacimiento() { return this.NuevoHermanoFormulario.get('nacimiento') }
  get telefono() { return this.NuevoHermanoFormulario.get('telefono') }
  get foto() { return this.NuevoHermanoFormulario.get('foto') }


  onSubmit() {
    this.nuevoHermano.nombre = this.NuevoHermanoFormulario.get("nombre").value;
    this.nuevoHermano.primerapellido = this.NuevoHermanoFormulario.get("primerapellido").value;
    this.nuevoHermano.segundoapellido = this.NuevoHermanoFormulario.get("segundoapellido").value;
    this.nuevoHermano.dni = this.NuevoHermanoFormulario.get("dni").value;
    this.nuevoHermano.correoelectronico = this.NuevoHermanoFormulario.get("correoelectronico").value;
    this.nuevoHermano.nacimiento = this.NuevoHermanoFormulario.get("nacimiento").value;
    this.nuevoHermano.telefono = this.NuevoHermanoFormulario.get("telefono").value;
    this.nuevoHermano.foto = this.NuevoHermanoFormulario.get("foto").value;
    console.log(this.NuevoHermanoFormulario);
    this.ServicioRestNuevohermanoService.añadirNuevohermano(this.nuevoHermano).subscribe();
  }

}
