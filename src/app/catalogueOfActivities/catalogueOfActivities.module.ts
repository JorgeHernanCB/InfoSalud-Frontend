import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
//import { ButtonGroupModule } from 'primeng/buttongroup';
//import { CalendarModule } from 'primeng/calendar';


//modules propios de la aplicacion
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../admin/auth/auth.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //modulos propios de la aplicacion
    PrimeNgModule,
    SharedModule,
    AuthModule,
  ],
  exports: [],
  providers: [],
})
export class catalogueOfActivitiesModule { }
