import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicioRestContactoService } from '../../../../servicios/servicio-rest-contacto.service';
import { Contacto, datosDevueltos } from '../../../../interfaces/contacto';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-borrarcontacto',
  templateUrl: './borrarcontacto.component.html',
  styleUrls: ['./borrarcontacto.component.sass']
})
export class BorrarcontactoComponent implements OnInit {

  constructor(private ServicioRestContactoService: ServicioRestContactoService) { }
  borrarContacto: Contacto = {
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
      'id_contacto': new FormControl('', [
        Validators.required
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
  get id_contacto() { return this.ContactoFormulario.get('id_contacto') }
  get nombre() { return this.ContactoFormulario.get('nombre') }
  get mensaje() { return this.ContactoFormulario.get('mensaje') }

  onSubmit() {
    this.borrarContacto.email = this.ContactoFormulario.get("email").value;
    this.borrarContacto.id_contacto = this.ContactoFormulario.get("id_contacto").value;
    this.borrarContacto.nombre = this.ContactoFormulario.get("nombre").value;
    this.borrarContacto.mensaje = this.ContactoFormulario.get("mensaje").value;
    console.log(this.ContactoFormulario);
    function borrar(){
      if(confirm('¿Estas seguro de borrar los datos?')){
        return true;
      }else{
        return false;
      }
    }
    this.ServicioRestContactoService.borrarContacto(this.borrarContacto.id_contacto).subscribe();
  }
}
