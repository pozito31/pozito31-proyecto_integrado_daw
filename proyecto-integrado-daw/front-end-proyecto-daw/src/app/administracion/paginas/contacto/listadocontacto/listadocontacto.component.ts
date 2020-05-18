import { Component, OnInit } from '@angular/core';
import { ServicioRestContactoService } from '../../../../servicios/servicio-rest-contacto.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Contacto, datosDevueltos } from '../../../../interfaces/contacto';


@Component({
  selector: 'app-listadocontacto',
  templateUrl: './listadocontacto.component.html',
  styleUrls: ['./listadocontacto.component.sass']
})
export class ListadocontactoComponent implements OnInit {

  contacto: Contacto[];
  error: boolean = false;

  constructor(private servicioRest: ServicioRestContactoService) { }

  ngOnInit(): void {
    this.servicioRest.ObtenerContacto()
      .subscribe((response: datosDevueltos) => {
        this.contacto = response.data;
      },
        (error) => {
          this.error = true;
        })
  }

}
