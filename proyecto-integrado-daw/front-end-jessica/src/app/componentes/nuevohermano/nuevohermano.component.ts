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
      'metododepago': new FormControl('', [
        Validators.required
      ]),
      'iban': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'tipodecuota': new FormControl('', [
        Validators.required
      ]),
      'nombredeltitularbancario': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'pais': new FormControl('', [
        Validators.required
      ]),
      'comunidadoestado': new FormControl('', [
        Validators.required
      ]),
      'provincia': new FormControl('', [
        Validators.required
      ]),
      'poblacion': new FormControl('', [
        Validators.required
      ]),
      'direccion': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'codigopostal': new FormControl('', [
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
  get metododepago() { return this.NuevoHermanoFormulario.get('metododepago') }
  get iban() { return this.NuevoHermanoFormulario.get('iban') }
  get tipodecuota() { return this.NuevoHermanoFormulario.get('tipodecuota') }
  get pais() { return this.NuevoHermanoFormulario.get('pais') }
  get comunidadoestado() { return this.NuevoHermanoFormulario.get('comunidadoestado') }
  get provincia() { return this.NuevoHermanoFormulario.get('provincia') }
  get poblacion() { return this.NuevoHermanoFormulario.get('poblacion') }
  get direccion() { return this.NuevoHermanoFormulario.get('direccion') }
  get codigopostal() { return this.NuevoHermanoFormulario.get('codigopostal') }
  get foto() { return this.NuevoHermanoFormulario.get('foto') }


  onSubmit() {
    
  }

}
