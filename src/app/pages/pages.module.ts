import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesGeneralComponent } from './pages-general.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesGeneralComponent,
  ],
  imports: [
    CommonModule,
    SharedModule, //Para poder tener todo el aspecto de la interfaz
    RouterModule, //El enrutamiento.
    AppRoutingModule, //Las rutas de la aplicación
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesGeneralComponent,
  ]
})
export class PagesModule { }
