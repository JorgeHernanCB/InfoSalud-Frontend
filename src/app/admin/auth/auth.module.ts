import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    PrimeNgModule,
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
