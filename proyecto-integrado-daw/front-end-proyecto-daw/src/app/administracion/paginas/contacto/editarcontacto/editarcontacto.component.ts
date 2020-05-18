import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editarcontacto',
  templateUrl: './editarcontacto.component.html',
  styleUrls: ['./editarcontacto.component.sass']
})
export class EditarcontactoComponent implements OnInit {

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
    const valor = this.ContactoFormulario;
    console.log(valor);
  }

}
