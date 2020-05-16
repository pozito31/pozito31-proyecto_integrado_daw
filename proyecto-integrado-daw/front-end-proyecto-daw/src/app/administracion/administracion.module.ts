import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { NuevohermanoComponent } from './paginas/nuevohermano/nuevohermano.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AdministracionComponent } from './administracion/administracion/administracion.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    AdministracionComponent,
    NavbarComponent,
    NoticiasComponent,
    NuevohermanoComponent,
    ContactoComponent
  ],
  exports: [
    AdministracionRoutingModule
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
