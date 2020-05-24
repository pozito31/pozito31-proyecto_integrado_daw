import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearcontacto',
  templateUrl: './crearcontacto.component.html',
  styleUrls: ['./crearcontacto.component.sass']
})
export class CrearcontactoComponent implements OnInit {

  constructor() { }

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
    
  }

}
