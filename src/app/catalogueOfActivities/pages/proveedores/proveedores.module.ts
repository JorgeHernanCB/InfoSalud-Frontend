import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ProveedoresComponent } from './proveedores.component';
import { NuevoProveedorComponent } from './pages/nuevo-proveedor/nuevoProveedor.component';



@NgModule({
  declarations: [
    ProveedoresComponent,
    NuevoProveedorComponent
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
    NuevoProveedorComponent

  ],
  providers:[ConfirmationService, MessageService],
})
export class ProveedoresModule { }
