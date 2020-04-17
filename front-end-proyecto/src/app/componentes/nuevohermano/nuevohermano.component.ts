import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevohermano',
  templateUrl: './nuevohermano.component.html',
  styleUrls: ['./nuevohermano.component.scss']
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
      'nacimiento': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'provincianacimiento': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'poblacionnacimiento': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'genero': new FormControl('', [
        Validators.required
      ]),
      'estado': new FormControl('', [
        Validators.required
      ]),
      'presentado1': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'presentado2': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get nombre() { return this.NuevoHermanoFormulario.get('nombre') }
  get primerapellido() { return this.NuevoHermanoFormulario.get('primerapellido') }
  get segundoapellido() { return this.NuevoHermanoFormulario.get('segundoapellido') }
  get dni() { return this.NuevoHermanoFormulario.get('dni') }
  get correoelectronico() { return this.NuevoHermanoFormulario.get('correoelectronico') }
  get nacimiento() { return this.NuevoHermanoFormulario.get('nacimiento') }
  get provincianacimiento() { return this.NuevoHermanoFormulario.get('provincianacimiento') }
  get poblacionnacimiento() { return this.NuevoHermanoFormulario.get('poblacionnacimiento') }
  get genero() { return this.NuevoHermanoFormulario.get('genero') }
  get estado() { return this.NuevoHermanoFormulario.get('estado') }
  get presentado1() { return this.NuevoHermanoFormulario.get('presentado1') }
  get presentado2() { return this.NuevoHermanoFormulario.get('presentado2') }

  onSubmit() {
    const valor = this.NuevoHermanoFormulario;
    console.log(valor);
  }

}
