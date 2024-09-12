import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ProveedoresComponent } from './proveedores.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TagModule } from 'primeng/tag';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmationService, MessageService } from 'primeng/api';
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
