import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion/administracion/administracion.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';


@NgModule({
  declarations: [AdministracionComponent, NavbarComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
