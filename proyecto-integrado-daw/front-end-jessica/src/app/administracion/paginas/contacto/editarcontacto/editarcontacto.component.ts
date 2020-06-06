import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicioRestContactoService } from '../../../../servicios/servicio-rest-contacto.service';
import { Contacto, datosDevueltos } from '../../../../interfaces/contacto';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-editarcontacto',
  templateUrl: './editarcontacto.component.html',
  styleUrls: ['./editarcontacto.component.sass']
})
export class EditarcontactoComponent implements OnInit {

  constructor(private ServicioRestContactoService: ServicioRestContactoService) { }
  editarContacto: Contacto = {
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
    this.editarContacto.email = this.ContactoFormulario.get("email").value;
    this.editarContacto.nombre = this.ContactoFormulario.get("nombre").value;
    this.editarContacto.mensaje = this.ContactoFormulario.get("mensaje").value;
    console.log(this.ContactoFormulario);
    this.ServicioRestContactoService.editarContacto(this.editarContacto).subscribe();
  }

}
