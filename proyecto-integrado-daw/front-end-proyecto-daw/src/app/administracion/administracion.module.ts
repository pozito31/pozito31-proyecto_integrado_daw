import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion/administracion/administracion.component';
import { NoticiasComponent } from './administracion/noticias/noticias.component';
import { NuevohermanoComponent } from './administracion/nuevohermano/nuevohermano.component';
import { ContactoComponent } from './administracion/contacto/contacto.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';


@NgModule({
  declarations: [AdministracionComponent, NoticiasComponent, NuevohermanoComponent, ContactoComponent, NavbarComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
