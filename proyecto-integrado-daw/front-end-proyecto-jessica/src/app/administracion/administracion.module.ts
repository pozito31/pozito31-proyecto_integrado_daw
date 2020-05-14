import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { ListarComponent } from './paginas/noticias/listar/listar.component';
import { CrearComponent } from './paginas/noticias/crear/crear.component';
import { EditarComponent } from './paginas/noticias/editar/editar.component';



@NgModule({
  declarations: [NavbarComponent, ListarComponent, CrearComponent, EditarComponent],
  imports: [
    CommonModule
  ]
})
export class AdministracionModule { }
