import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

import { FacturasRoutingModule } from './facturas-routing.module';
import { FacturasComponent } from './facturas.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    FacturasComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FacturasRoutingModule,
    PrimeNgModule,
    SharedModule,
  ],
  exports: [
    FacturasComponent,
  ],
})
export class FacturasModule { }
