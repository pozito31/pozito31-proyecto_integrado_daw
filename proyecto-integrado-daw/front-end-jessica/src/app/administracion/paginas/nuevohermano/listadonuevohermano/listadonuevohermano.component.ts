import { Component, OnInit } from '@angular/core';
import { ServicioRestNuevohermanoService } from '../../../../servicios/servicio-rest-nuevohermano.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Nuevohermano, datosDevueltos } from '../../../../interfaces/nuevohermano';

@Component({
  selector: 'app-listadonuevohermano',
  templateUrl: './listadonuevohermano.component.html',
  styleUrls: ['./listadonuevohermano.component.sass']
})
export class ListadonuevohermanoComponent implements OnInit {

  nuevohermano: Nuevohermano[];
  error: boolean = false;

  constructor(private servicioRest: ServicioRestNuevohermanoService) { }

  ngOnInit(): void {
    this.servicioRest.Obtenernuevohermano()
      .subscribe((response: datosDevueltos) => {
        this.nuevohermano = response.data;
      },
        (error) => {
          this.error = true;
        })
  }

}
