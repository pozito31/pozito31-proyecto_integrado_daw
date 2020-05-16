import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionModule } from './administracion/administracion.module';
import { AuthModule } from './auth/auth.module';
import { PaginaModule } from './pagina/pagina.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministracionModule,
    AuthModule,
    PaginaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
