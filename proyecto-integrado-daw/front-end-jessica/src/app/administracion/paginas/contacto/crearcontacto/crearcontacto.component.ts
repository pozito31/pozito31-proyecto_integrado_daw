import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicioRestContactoService } from '../../../../servicios/servicio-rest-contacto.service';
import { Contacto, datosDevueltos } from '../../../../interfaces/contacto';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-crearcontacto',
  templateUrl: './crearcontacto.component.html',
  styleUrls: ['./crearcontacto.component.sass']
})
export class CrearcontactoComponent implements OnInit {

  constructor(private ServicioRestContactoService: ServicioRestContactoService) { }
  nuevoContacto: Contacto = {
    id_contacto: 0,
    nombre: "a",
    email: "a",
    mensaje: "a"
  };

  ContactoFormulario: FormGroup;

  ngOnInit(): void {
    this.ContactoFormulario = new FormGroup({
      'email': new FormControl('', [
         Validators.required,
         Validators.minLength(4) 
      ]),
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'mensaje': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get email() { return this.ContactoFormulario.get('email') }
  get nombre() { return this.ContactoFormulario.get('nombre') }
  get mensaje() { return this.ContactoFormulario.get('mensaje') }

  onSubmit() {
    this.nuevoContacto.email = this.ContactoFormulario.get("email").value;
    this.nuevoContacto.nombre = this.ContactoFormulario.get("nombre").value;
    this.nuevoContacto.mensaje = this.ContactoFormulario.get("mensaje").value;
    console.log(this.ContactoFormulario);
    this.ServicioRestContactoService.añadirContacto(this.nuevoContacto).subscribe();
  }

}
