import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PagesRoutingModule } from './pages/pages.routing';

import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes : Routes = [
  //Lo demás viene importado con PagesRoutingModule y AuthRoutingModule.
  { path : '' , redirectTo : '/dashboard' , pathMatch : 'full' },
  { path : '**' , component : NoPageFoundComponent },

];


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule, // Traemos las rutas hijas de las páginas.
    AuthRoutingModule, // Traemos las rutas del Auth para el login y register
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
