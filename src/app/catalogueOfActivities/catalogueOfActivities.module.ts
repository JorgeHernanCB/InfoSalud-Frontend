import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConveniosComponent } from './pages/convenios/convenios.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownProveedoresComponent } from './pages/proveedores/drop-down-proveedores/drop-down-proveedores.component';


//Imports 
import { ButtonGroupModule } from 'primeng/buttongroup';


//Forms
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../admin/auth/login/login.module';





@NgModule({
  declarations: [
    ConveniosComponent,
    ProveedoresComponent,
    DropDownProveedoresComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeNgModule,
    SharedModule,
    //desde aqui
    ButtonGroupModule,
    ReactiveFormsModule,
    CalendarModule,
    LoginModule
  ],
  exports: [
    ConveniosComponent,
    ProveedoresComponent,
  ],
  providers: [],
})
export class catalogueOfActivitiesModule { }
