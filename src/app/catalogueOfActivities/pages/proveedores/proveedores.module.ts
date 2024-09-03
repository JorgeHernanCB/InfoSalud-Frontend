import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

import { SharedModule } from '../../../shared/shared.module';
import { ProveedoresComponent } from './proveedores.component';
import { DropDownProveedoresComponent } from './drop-down-proveedores/drop-down-proveedores.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { SeguimientosComponent } from './pages/seguimientos/seguimientos.component';
import { ProveedoresRoutingModule } from './proveedores-routing.module';

@NgModule({
  declarations: [
    ProveedoresComponent,
    DropDownProveedoresComponent,
    CaracteristicasComponent,
    DocumentosComponent,
    SeguimientosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProveedoresRoutingModule,
    PrimeNgModule,
    SharedModule,
  ],
  exports: [
    ProveedoresComponent,
    CaracteristicasComponent,
    DropDownProveedoresComponent
  ]
})
export class ProveedoresModule { }
