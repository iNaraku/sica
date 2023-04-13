import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdversoComponent } from './pages/adverso/adverso.component';
import { CalidadComponent } from './pages/calidad/calidad.component';
import { CentinelaComponent } from './pages/centinela/centinela.component';
import { CuasifallaComponent } from './pages/cuasifalla/cuasifalla.component';
import { ErrordemedicacionComponent } from './pages/errordemedicacion/errordemedicacion.component';
import { SegundavictimaComponent } from './pages/segundavictima/segundavictima.component';
import { Segundavictima2Component } from './pages/segundavictima2/segundavictima2.component';

const routes: Routes = [
  { path: 'adverso', component: AdversoComponent },
  { path: 'calidad', component: CalidadComponent },
  { path: 'centinela', component: CentinelaComponent },
  { path: 'cuasifalla', component: CuasifallaComponent },
  { path: 'errordemedicacion', component: ErrordemedicacionComponent },
  { path: 'segundavictima', component: SegundavictimaComponent },
  { path: 'segundavictima2', component: Segundavictima2Component },
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'registro' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
