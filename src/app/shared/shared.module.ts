import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//primeNg
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

//Componentes
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent} from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { HeaderComponent } from './components/header/header.component';
import {AppConfigModule} from "../layout/config/config.module";
import { FilteredButtonComponent } from './components/filtered-button/filtered-button.component';
import { ButtonGroupModule } from 'primeng/buttongroup';

import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
@NgModule({
  declarations: [
    HomePageComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsMenuComponent,
    HeaderComponent,
    FilteredButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule,
    AppConfigModule,
    ButtonGroupModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    FileUploadModule,
  ],
  exports:[
    HomePageComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    FilteredButtonComponent,
  ]
})
export class SharedModule { }
