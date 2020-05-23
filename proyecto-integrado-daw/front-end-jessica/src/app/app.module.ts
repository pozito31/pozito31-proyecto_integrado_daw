import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionModule } from './administracion/administracion.module';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HermanomayorComponent } from './componentes/hermanomayor/hermanomayor.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NovenasComponent } from './componentes/novenas/novenas.component';
import { NuevohermanoComponent } from './componentes/nuevohermano/nuevohermano.component';
import { ParrocoComponent } from './componentes/parroco/parroco.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ContactoComponent,
    HermanomayorComponent,
    HistoriaComponent,
    ImagenesComponent,
    NoticiasComponent,
    NovenasComponent,
    NuevohermanoComponent,
    ParrocoComponent,
    PiePaginaComponent,
    TableroComponent,
    VideosComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AdministracionModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
