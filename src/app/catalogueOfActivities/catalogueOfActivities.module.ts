import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConveniosComponent } from './pages/convenios/convenios.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ConveniosComponent,
    ProveedoresComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeNgModule,
    SharedModule,
  ],
  exports: [
    ConveniosComponent,
    ProveedoresComponent

  ],
  providers: [],
})
export class catalogueOfActivitiesModule { }
