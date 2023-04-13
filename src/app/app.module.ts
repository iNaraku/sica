import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdversoComponent } from './pages/adverso/adverso.component';
import { CalidadComponent } from './pages/calidad/calidad.component';
import { CentinelaComponent } from './pages/centinela/centinela.component';
import { CuasifallaComponent } from './pages/cuasifalla/cuasifalla.component';
import { ErrordemedicacionComponent } from './pages/errordemedicacion/errordemedicacion.component';
import { SegundavictimaComponent } from './pages/segundavictima/segundavictima.component';
import { Segundavictima2Component } from './pages/segundavictima2/segundavictima2.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    AdversoComponent,
    CalidadComponent,
    CentinelaComponent,
    CuasifallaComponent,
    ErrordemedicacionComponent,
    SegundavictimaComponent,
    Segundavictima2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
