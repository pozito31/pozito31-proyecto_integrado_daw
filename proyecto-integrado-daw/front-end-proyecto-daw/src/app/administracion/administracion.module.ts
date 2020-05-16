import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion/administracion/administracion.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { NuevohermanoComponent } from './paginas/nuevohermano/nuevohermano.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [AdministracionComponent, NavbarComponent, NoticiasComponent, NuevohermanoComponent, ContactoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
