import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ContactoFormulario: FormGroup;

  ngOnInit(): void {
    this.ContactoFormulario = new FormGroup({
      'email': new FormControl('', [
         Validators.required,
         Validators.minLength(6) 
      ]),
      'nombre': new FormControl('', [
        Validators.required
      ]),
      'mensaje': new FormControl('', [
        Validators.required
      ])
    });
  }

  get email() { return this.ContactoFormulario.get('email') }
  get nombre() { return this.ContactoFormulario.get('nombre') }
  get mensaje() { return this.ContactoFormulario.get('mensaje') }

  onSubmit() {
    const valor = this.ContactoFormulario;
    console.log(valor);
  }

}
