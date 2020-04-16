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
      ])
    });
  }

  get nombre() { return this.NuevoHermanoFormulario.get('nombre') }
  get primerapellido() { return this.NuevoHermanoFormulario.get('primerapellido') }
  get segundoapellido() { return this.NuevoHermanoFormulario.get('segundoapellido') }

  onSubmit() {
    const valor = this.NuevoHermanoFormulario;
    console.log(valor);
  }

}
