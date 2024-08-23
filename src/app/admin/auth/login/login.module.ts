import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======

>>>>>>> 7e32f43724d5decb59302ef8c28411ec88668c16

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
