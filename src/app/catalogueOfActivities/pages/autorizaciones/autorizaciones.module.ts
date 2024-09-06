import { NgModule } from '@angular/core';
import { AutorizacionesComponent } from './autorizaciones.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { SharedModule } from '../../../shared/shared.module';
import { AutorizacionesRoutingModule } from './autorizaciones-routing.module';


@NgModule({
  declarations: [
    AutorizacionesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AutorizacionesRoutingModule,
    PrimeNgModule,
    SharedModule,
  ],
  exports: [
    AutorizacionesComponent
  ],

})
export class AutorizacionesModule { }
