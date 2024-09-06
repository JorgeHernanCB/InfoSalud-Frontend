import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { conveniosRoutingModule } from './convenios-routing.module';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { SharedModule } from '../../../shared/shared.module';
import { ConveniosComponent } from './convenios.component';


@NgModule({
  declarations: [
    ConveniosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    conveniosRoutingModule,
    //modulos propios de la aplicacion
    PrimeNgModule,
    SharedModule,
  ],
  exports: [
    ConveniosComponent,
  ],
})
export class ConveniosModule { }
