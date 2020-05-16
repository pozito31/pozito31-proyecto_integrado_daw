import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { AdministracionComponent } from './administracion/administracion/administracion.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    AdministracionComponent,
    NavbarComponent
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
