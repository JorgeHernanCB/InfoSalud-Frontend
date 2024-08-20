import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNg
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LoginModule } from '../auth/login/login.module';

//Componentes
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent} from './pages/home-page/home-page.component';
import { MainLoginComponent } from './pages/mainLogin/main-login.component';



@NgModule({
  declarations: [
    HomePageComponent,
    MainLoginComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    LoginModule
  ],
  exports:[
    HomePageComponent,
    MainLoginComponent,
    FooterComponent,
    NavbarComponent,

  ]
})
export class SharedModule { }
