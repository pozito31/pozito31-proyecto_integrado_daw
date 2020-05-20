import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';



@NgModule({
  declarations: [IndexComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class AdministracionModule { }
