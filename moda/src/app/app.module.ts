import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
