import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

import { PerfilComponent } from './pages/perfil/perfil.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';
import { SeguridadComponent } from './pages/seguridad/seguridad.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';

import { AdministrationRoutingModule } from './pages/administration-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PerfilComponent,
    ParametrosComponent,
    SeguridadComponent,
    NotificacionesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdministrationRoutingModule,
    PrimeNgModule,
    SharedModule
  ],
  exports: [
    PerfilComponent,
    ParametrosComponent,
    SeguridadComponent,
    NotificacionesComponent
  ]
})
export class AdministrationModule { }
