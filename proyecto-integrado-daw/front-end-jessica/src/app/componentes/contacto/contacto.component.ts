import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioRestContactoService } from '../../servicios/servicio-rest-contacto.service';
import { Contacto } from '../../interfaces/contacto';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {

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
