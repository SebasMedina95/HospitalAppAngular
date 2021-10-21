import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PagesGeneralComponent } from './pages/pages-general.component';

const routes : Routes = [
  { 
    /**Ruta general o ruta Padre
     * Lo harémos de esta manera para separar el tema de los Templates.
     */
    path : '' , 
    component : PagesGeneralComponent,
    /**Rutas Hijas */
    children: [
      { path : 'dashboard' , component : DashboardComponent },
      { path : 'progress' , component : ProgressComponent },
      { path : 'grafica1' , component : Grafica1Component },
      { path : '' , redirectTo : '/dashboard' , pathMatch : 'full' },
    ] 
  },


  { path : 'register' , component : RegisterComponent },
  { path : 'login' , component : LoginComponent },

  { path : '**' , component : NoPageFoundComponent },
];


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
