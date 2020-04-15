import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  crearFormulario(){
    
    this.forma = this.fb.group({
      titulo: [''],
      descripcion: [''],
      texto: [''],
      imagen: ['']
    });
  }

  insertar(){
    console.log( this.forma );
  }

}
