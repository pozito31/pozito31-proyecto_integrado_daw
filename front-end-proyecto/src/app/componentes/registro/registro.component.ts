import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  RegistroFormulario: FormGroup;

  ngOnInit(): void {
    this.RegistroFormulario = new FormGroup({
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'apellidos': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'usuario': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ])
    });
  }

  get nombre() { return this.RegistroFormulario.get('nombre') }
  get apellidos() { return this.RegistroFormulario.get('apellidos') }
  get usuario() { return this.RegistroFormulario.get('usuario') }
  get password() { return this.RegistroFormulario.get('password') }

  onSubmit() {    
    const val = this.RegistroFormulario.value;
    console.log(val);
  }

}
