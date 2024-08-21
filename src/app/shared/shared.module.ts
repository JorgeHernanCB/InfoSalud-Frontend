import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//primeNg
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LoginModule } from '../auth/login/login.module';

//Componentes
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent} from './pages/home-page/home-page.component';
import { MainLoginComponent } from './pages/mainLogin/main-login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { AdministracionComponent } from './pages/administracion-page/administracion-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    MainLoginComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsMenuComponent,
    AdministracionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    LoginModule
  ],
  exports:[
    HomePageComponent,
    MainLoginComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,

  ]
})
export class SharedModule { }
