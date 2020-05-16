import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { AdministracionComponent } from './administracion/administracion/administracion.component';
import { AppRoutingModule } from '../app-routing.module';
import { CrearnoticiaComponent } from './paginas/noticias/crearnoticia/crearnoticia.component';
import { EditarnoticiaComponent } from './paginas/noticias/editarnoticia/editarnoticia.component';
import { ListadonoticiaComponent } from './paginas/noticias/listadonoticia/listadonoticia.component';
import { CrearnuevohermanoComponent } from './paginas/nuevohermano/crearnuevohermano/crearnuevohermano.component';
import { EditarnuevohermanoComponent } from './paginas/nuevohermano/editarnuevohermano/editarnuevohermano.component';
import { ListadonuevohermanoComponent } from './paginas/nuevohermano/listadonuevohermano/listadonuevohermano.component';
import { CrearcontactoComponent } from './paginas/contacto/crearcontacto/crearcontacto.component';
import { EditarcontactoComponent } from './paginas/contacto/editarcontacto/editarcontacto.component';
import { ListadocontactoComponent } from './paginas/contacto/listadocontacto/listadocontacto.component';


@NgModule({
  declarations: [
    AdministracionComponent,
    NavbarComponent,
    CrearnoticiaComponent,
    EditarnoticiaComponent,
    ListadonoticiaComponent,
    CrearnuevohermanoComponent,
    EditarnuevohermanoComponent,
    ListadonuevohermanoComponent,
    CrearcontactoComponent,
    EditarcontactoComponent,
    ListadocontactoComponent
  ],
  exports: [
    AdministracionRoutingModule
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
