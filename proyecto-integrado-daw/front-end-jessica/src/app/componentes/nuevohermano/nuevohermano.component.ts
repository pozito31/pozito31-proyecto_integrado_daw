import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevohermano',
  templateUrl: './nuevohermano.component.html',
  styleUrls: ['./nuevohermano.component.sass']
})
export class NuevohermanoComponent implements OnInit {

  constructor() { }

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
    
  }

}
