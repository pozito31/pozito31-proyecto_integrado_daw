import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { NoticiasComponent } from './compartidos/noticias/noticias.component';
import { CrearnoticiaComponent } from './compartidos/noticias/crearnoticia/crearnoticia.component';
import { EditarnoticiaComponent } from './compartidos/noticias/editarnoticia/editarnoticia.component';
import { ListarnoticiaComponent } from './compartidos/noticias/listarnoticia/listarnoticia.component';
import { NuevohermanoComponent } from './compartidos/nuevohermano/nuevohermano.component';
import { CrearnuevohermanoComponent } from './compartidos/nuevohermano/crearnuevohermano/crearnuevohermano.component';
import { EditarnuevohermanoComponent } from './compartidos/nuevohermano/editarnuevohermano/editarnuevohermano.component';
import { ListarnuevohermanoComponent } from './compartidos/nuevohermano/listarnuevohermano/listarnuevohermano.component';
import { ContactoComponent } from './compartidos/contacto/contacto.component';
import { CrearcontactoComponent } from './compartidos/contacto/crearcontacto/crearcontacto.component';
import { EditarcontactoComponent } from './compartidos/contacto/editarcontacto/editarcontacto.component';
import { ListarcontactoComponent } from './compartidos/contacto/listarcontacto/listarcontacto.component';


@NgModule({
  declarations: [IndexComponent, NavbarComponent, NoticiasComponent, CrearnoticiaComponent, EditarnoticiaComponent, ListarnoticiaComponent, NuevohermanoComponent, CrearnuevohermanoComponent, EditarnuevohermanoComponent, ListarnuevohermanoComponent, ContactoComponent, CrearcontactoComponent, EditarcontactoComponent, ListarcontactoComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
