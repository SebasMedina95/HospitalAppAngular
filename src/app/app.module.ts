import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';

@NgModule({
  /**En las declaraciones van los componentes */
  declarations: [
    AppComponent,
    NoPageFoundComponent,
  ],
  /**En los imports van los modulos que vamos a cargar */
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
