import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ProveedoresComponent } from './proveedores.component';

@NgModule({
  declarations: [
    ProveedoresComponent,

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

  ]
})
export class ProveedoresModule { }
