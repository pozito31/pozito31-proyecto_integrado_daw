import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion/administracion.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { CrearcontactoComponent } from './paginas/contacto/crearcontacto/crearcontacto.component';
import { EditarcontactoComponent } from './paginas/contacto/editarcontacto/editarcontacto.component';
import { ListadocontactoComponent } from './paginas/contacto/listadocontacto/listadocontacto.component';
import { CrearnoticiaComponent } from './paginas/noticias/crearnoticia/crearnoticia.component';
import { EditarnoticiaComponent } from './paginas/noticias/editarnoticia/editarnoticia.component';
import { ListadonoticiaComponent } from './paginas/noticias/listadonoticia/listadonoticia.component';
import { CrearnuevohermanoComponent } from './paginas/nuevohermano/crearnuevohermano/crearnuevohermano.component';
import { EditarnuevohermanoComponent } from './paginas/nuevohermano/editarnuevohermano/editarnuevohermano.component';
import { ListadonuevohermanoComponent } from './paginas/nuevohermano/listadonuevohermano/listadonuevohermano.component';
import { PiePaginaComponent } from './compartidos/pie-pagina/pie-pagina.component';
import { BorrarnoticiaComponent } from './paginas/noticias/borrarnoticia/borrarnoticia.component';
import { BorrarnuevohermanoComponent } from './paginas/nuevohermano/borrarnuevohermano/borrarnuevohermano.component';
import { BorrarcontactoComponent } from './paginas/contacto/borrarcontacto/borrarcontacto.component';


@NgModule({
  declarations: [
    AdministracionComponent, 
    NavbarComponent, 
    CrearcontactoComponent, 
    EditarcontactoComponent, 
    ListadocontactoComponent, 
    CrearnoticiaComponent, 
    EditarnoticiaComponent, 
    ListadonoticiaComponent, 
    CrearnuevohermanoComponent, 
    EditarnuevohermanoComponent, 
    ListadonuevohermanoComponent, 
    PiePaginaComponent, 
    BorrarnoticiaComponent, 
    BorrarnuevohermanoComponent, 
    BorrarcontactoComponent],
  exports: [
    AdministracionRoutingModule
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
