import { NgModule } from '@angular/core';
import { AuditoriasComponent } from './auditorias.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

import { AuditoriasRoutingModule } from './auditorias-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ConsultarAuditoriasComponent } from './consultar-auditorias/consultar-auditorias.component';
import { ModificarAuditoriasComponent } from './modificar-auditorias/modificar-auditorias.component';


@NgModule({
  declarations: [
    AuditoriasComponent,
    ConsultarAuditoriasComponent,
    ModificarAuditoriasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuditoriasRoutingModule,
    PrimeNgModule,
    SharedModule,
  ],
  exports: [
    AuditoriasComponent,
    ConsultarAuditoriasComponent,
    ModificarAuditoriasComponent
  ],

})
export class AuditoriasModule { }
