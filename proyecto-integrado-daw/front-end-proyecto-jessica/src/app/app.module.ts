import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CabeceraComponent } from './pagina/componentes/cabecera/cabecera.component';
import { ContactoComponent } from './pagina/componentes/contacto/contacto.component';
import { HermanomayorComponent } from './pagina/componentes/hermanomayor/hermanomayor.component';
import { HistoriaComponent } from './pagina/componentes/historia/historia.component';
import { ImagenesComponent } from './pagina/componentes/imagenes/imagenes.component';
import { LoginComponent } from './pagina/componentes/login/login.component';
import { MenuComponent } from './pagina/componentes/menu/menu.component';
import { NoticiasComponent } from './pagina/componentes/noticias/noticias.component';
import { NovenasComponent } from './pagina/componentes/novenas/novenas.component';
import { NuevohermanoComponent } from './pagina/componentes/nuevohermano/nuevohermano.component';
import { ParrocoComponent } from './pagina/componentes/parroco/parroco.component';
import { PiePaginaComponent } from './pagina/componentes/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './pagina/componentes/registro/registro.component';
import { TableroComponent } from './pagina/componentes/tablero/tablero.component';
import { VideosComponent } from './pagina/componentes/videos/videos.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AdministracionModule } from './administracion/administracion.module';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ContactoComponent,
    HermanomayorComponent,
    HistoriaComponent,
    ImagenesComponent,
    LoginComponent,
    MenuComponent,
    NoticiasComponent,
    NuevohermanoComponent,
    ParrocoComponent,
    PiePaginaComponent,
    RegistroComponent,
    TableroComponent,
    VideosComponent,
    NovenasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AdministracionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
