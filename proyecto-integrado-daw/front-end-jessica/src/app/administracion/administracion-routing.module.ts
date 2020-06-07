import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent} from './administracion/administracion.component';
import { CrearnoticiaComponent} from './paginas/noticias/crearnoticia/crearnoticia.component';
import { EditarnoticiaComponent } from './paginas/noticias/editarnoticia/editarnoticia.component';
import { ListadonoticiaComponent } from './paginas/noticias/listadonoticia/listadonoticia.component';
import { CrearnuevohermanoComponent } from './paginas/nuevohermano/crearnuevohermano/crearnuevohermano.component';
import { EditarnuevohermanoComponent } from './paginas/nuevohermano/editarnuevohermano/editarnuevohermano.component';
import { ListadonuevohermanoComponent } from './paginas/nuevohermano/listadonuevohermano/listadonuevohermano.component';
import { CrearcontactoComponent } from './paginas/contacto/crearcontacto/crearcontacto.component';
import { EditarcontactoComponent } from './paginas/contacto/editarcontacto/editarcontacto.component';
import { ListadocontactoComponent } from './paginas/contacto/listadocontacto/listadocontacto.component';
import { BorrarnoticiaComponent } from './paginas/noticias/borrarnoticia/borrarnoticia.component';
import { BorrarnuevohermanoComponent } from './paginas/nuevohermano/borrarnuevohermano/borrarnuevohermano.component';
import { BorrarcontactoComponent } from './paginas/contacto/borrarcontacto/borrarcontacto.component';


const ADMIN_ROUTES: Routes = [
  {
    path: 'administracion',
    component: AdministracionComponent
  },
  {
    path: 'paginas/noticias/crearnoticia',
    component: CrearnoticiaComponent
  },
  {
    path: 'paginas/noticias/editarnoticia',
    component: EditarnoticiaComponent
  },
  {
    path: 'paginas/noticias/borrarnoticia',
    component: BorrarnoticiaComponent
  },
  {
    path: 'paginas/noticias/listadonoticia',
    component: ListadonoticiaComponent
  },
  {
    path: 'paginas/nuevohermano/crearnuevohermano',
    component: CrearnuevohermanoComponent
  },
  {
    path: 'paginas/nuevohermano/editarnuevohermano',
    component: EditarnuevohermanoComponent
  },
  {
    path: 'paginas/nuevohermano/borrarnuevohermano',
    component: BorrarnuevohermanoComponent
  },
  {
    path: 'paginas/nuevohermano/listadonuevohermano',
    component: ListadonuevohermanoComponent
  },
  {
    path: 'paginas/contacto/crearcontacto',
    component:  CrearcontactoComponent
  },
  {
    path: 'paginas/contacto/editarcontacto',
    component:  EditarcontactoComponent
  },
  {
    path: 'paginas/contacto/borrarcontacto',
    component:  BorrarcontactoComponent
  },
  {
    path: 'paginas/contacto/listadocontacto',
    component:  ListadocontactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
