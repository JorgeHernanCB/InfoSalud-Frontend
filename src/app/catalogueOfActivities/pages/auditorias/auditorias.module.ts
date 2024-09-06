import { NgModule } from '@angular/core';
import { AuditoriasComponent } from './auditorias.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

import { AuditoriasRoutingModule } from './auditorias-routing.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AuditoriasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuditoriasRoutingModule,
    PrimeNgModule,
    SharedModule,
  ],
  exports: [],

})
export class AuditoriasModule { }
