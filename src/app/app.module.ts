import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetallesComponent } from './dashboard/detalles/detalles.component';
import { ServicioService } from './servicios/servicio.service';

//IMPLEMENTACIÓN DEL ROUTING.

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detalles',
    component: DetallesComponent,
    children: [ {path: ':id', component: DetallesComponent} ]},
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
