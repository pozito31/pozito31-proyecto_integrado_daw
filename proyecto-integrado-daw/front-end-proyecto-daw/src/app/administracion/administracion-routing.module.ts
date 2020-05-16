import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent} from './administracion/administracion/administracion.component';
import { CrearnoticiaComponent} from './paginas/noticias/crearnoticia/crearnoticia.component';
import { EditarnoticiaComponent } from './paginas/noticias/editarnoticia/editarnoticia.component';
import { ListadonoticiaComponent } from './paginas/noticias/listadonoticia/listadonoticia.component';
import { CrearnuevohermanoComponent } from './paginas/nuevohermano/crearnuevohermano/crearnuevohermano.component';
import { EditarnuevohermanoComponent } from './paginas/nuevohermano/editarnuevohermano/editarnuevohermano.component';
import { ListadonuevohermanoComponent } from './paginas/nuevohermano/listadonuevohermano/listadonuevohermano.component';
import { CrearcontactoComponent } from './paginas/contacto/crearcontacto/crearcontacto.component';
import { EditarcontactoComponent } from './paginas/contacto/editarcontacto/editarcontacto.component';
import { ListadocontactoComponent } from './paginas/contacto/listadocontacto/listadocontacto.component';


const ADMIN_ROUTES: Routes = [
  {
    path: 'administracion',
    component: AdministracionComponent
  },
  {
    path: 'paginas/noticias',
    component: CrearnoticiaComponent
  },
  {
    path: 'paginas/noticias',
    component: EditarnoticiaComponent
  },
  {
    path: 'paginas/noticias',
    component: ListadonoticiaComponent
  },
  {
    path: 'paginas/nuevohermano',
    component: CrearnuevohermanoComponent
  },
  {
    path: 'paginas/nuevohermano',
    component: EditarnuevohermanoComponent
  },
  {
    path: 'paginas/nuevohermano',
    component: ListadonuevohermanoComponent
  },
  {
    path: 'paginas/contacto',
    component:  CrearcontactoComponent
  },
  {
    path: 'paginas/contacto',
    component:  EditarcontactoComponent
  },
  {
    path: 'paginas/contacto',
    component:  ListadocontactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }