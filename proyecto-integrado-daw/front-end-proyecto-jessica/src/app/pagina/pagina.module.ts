import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';


@NgModule({
  declarations: [CabeceraComponent],
  imports: [
    CommonModule,
    PaginaRoutingModule
  ]
})
export class PaginaModule { }
