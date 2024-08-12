import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Componentes de PrimeNG
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HelloWordComponent } from './components/hello-word/hello-word.component';
import { HelloWordService } from './service/hello-word/hello-word.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HelloWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [HelloWordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
