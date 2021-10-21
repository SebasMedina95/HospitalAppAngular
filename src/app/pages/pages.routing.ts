import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesGeneralComponent } from './pages-general.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [

    { 
        path : 'dashboard' , 
        component : PagesGeneralComponent,
        /**Rutas Hijas */
        children: [
            { path : '' , component : DashboardComponent },
            { path : 'progress' , component : ProgressComponent },
            { path : 'grafica1' , component : Grafica1Component },
            { path : '**' , redirectTo : 'dashboard' },
        ] 
    },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
