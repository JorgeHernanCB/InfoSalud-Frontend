import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Componentes de PrimeNG
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
//Todo - organizar los componentes
import { HelloWordComponent } from './components/hello-word/hello-word.component';
import { HelloWordService } from './service/hello-word/hello-word.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLoginComponent } from './pages/main-login/main-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWordComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    MainLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    MenubarModule,
    PanelModule,
    HttpClientModule


  ],
  providers: [HelloWordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
