import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//primeNg
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

//Componentes
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent} from './pages/home-page/home-page.component';
import { MainLoginComponent } from './pages/mainLogin/main-login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { HeaderComponent } from './components/header/header.component';
import {AppConfigModule} from "../layout/config/config.module";
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { DropdownCardsComponent } from './components/dropdown-cards/dropdown-cards.component';
import { FilteredButtonComponent } from './components/filtered-button/filtered-button.component';
import { ButtonGroupModule } from 'primeng/buttongroup';



//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    HomePageComponent,
    MainLoginComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsMenuComponent,
    HeaderComponent,
    BusinessCardComponent,
    DropdownCardsComponent,
    FilteredButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    AppConfigModule,
    ButtonGroupModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,

  ],
  exports:[
    HomePageComponent,
    MainLoginComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    BusinessCardComponent,
  ],
})
export class SharedModule { }
