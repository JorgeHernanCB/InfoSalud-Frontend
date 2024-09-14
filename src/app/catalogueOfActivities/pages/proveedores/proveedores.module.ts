import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ProveedoresComponent } from './proveedores.component';
import { NuevoProveedorComponent } from './pages/nuevo-proveedor/nuevoProveedor.component';
import { ModificarProveedorComponent } from './pages/modificar-Proveedor/modificar-Proveedor.component';



@NgModule({
  declarations: [
    ProveedoresComponent,
    NuevoProveedorComponent,
    ModificarProveedorComponent
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
    NuevoProveedorComponent,
    ModificarProveedorComponent

  ],
  providers:[ConfirmationService, MessageService],
})
export class ProveedoresModule { }
