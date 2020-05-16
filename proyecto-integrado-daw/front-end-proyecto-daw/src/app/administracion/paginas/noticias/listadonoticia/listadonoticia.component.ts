import { Component, OnInit } from '@angular/core';
import { ServicioRestNoticiasService } from '../../../../servicios/servicio-rest-noticias.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Noticias, datosDevueltos } from '../../../../interfaces/noticias';


@Component({
  selector: 'app-listadonoticia',
  templateUrl: './listadonoticia.component.html',
  styleUrls: ['./listadonoticia.component.sass']
})
export class ListadonoticiaComponent implements OnInit {

  noticias: Noticias[];
  error: boolean = false;

  constructor(private servicioRest: ServicioRestNoticiasService) { }

  ngOnInit(): void {
    this.servicioRest.ObtenerNoticias()
      .subscribe((response: datosDevueltos) => {
        this.noticias = response.data;
      },
        (error) => {
          this.error = true;
        })
  }

}
