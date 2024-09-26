import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConveniosRoutingModule } from './convenios-routing.module';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { SharedModule } from '../../../shared/shared.module';
import { ConveniosComponent } from './convenios.component';
import { NuevoConveniosComponent } from './pages/nuevo-convenios/nuevo-convenios.component';
import { ModificarConveniosComponent } from './pages/modificar-convenios/modificar-convenios.component';
import { VerConveniosComponent } from './pages/ver-convenios/ver-convenios.component';


@NgModule({
  declarations: [
    ConveniosComponent,
    NuevoConveniosComponent,
    VerConveniosComponent,
    ModificarConveniosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    //modulos propios de la aplicacion
    ConveniosRoutingModule,
    PrimeNgModule,
    SharedModule,
  ],
  exports: [
    ConveniosComponent,
    NuevoConveniosComponent,
    VerConveniosComponent,
    ModificarConveniosComponent
  ],
})
export class ConveniosModule { }
