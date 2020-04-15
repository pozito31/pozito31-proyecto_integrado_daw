import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder) {

    this.crearFormulario();

   }

  ngOnInit(): void {
  }

  get tituloNoValido(){
    return this.forma.get('titulo').invalid && this.forma.get('titulo').touched
  }

  get descripcionNoValida(){
    return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched
  }

  get textoNoValido(){
    return this.forma.get('texto').invalid && this.forma.get('texto').touched
  }

  get imagenNoValida(){
    return this.forma.get('imagen').invalid && this.forma.get('imagen').touched
  }

  crearFormulario(){
    
    this.forma = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      texto: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  insertar(){
    console.log( this.forma );

    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    //Posteo de información
    this.forma.reset();
  }

}
