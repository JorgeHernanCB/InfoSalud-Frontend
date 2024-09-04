import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//import { DropDownProveedoresComponent } from './pages/proveedores/drop-down-proveedores/drop-down-proveedores.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
//import { ButtonGroupModule } from 'primeng/buttongroup';
//import { CalendarModule } from 'primeng/calendar';


//modules propios de la aplicacion
import { ConveniosComponent } from './pages/convenios/convenios.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../admin/auth/auth.module';
import { ProveedoresModule } from './pages/proveedores/proveedores.module';

@NgModule({
  declarations: [
    ConveniosComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //desde aqui
    PrimeNgModule,
    SharedModule,
    AuthModule,
    ProveedoresModule,
  ],
  exports: [
    ConveniosComponent,
    //ProveedoresComponent,
  ],
  providers: [],
})
export class catalogueOfActivitiesModule { }
