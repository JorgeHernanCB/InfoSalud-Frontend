import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//HelloWordComponent
import { HelloWordComponent } from './shared/components/hello-word/hello-word.component';
import { HelloWordService } from './service/hello-word/hello-word.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//importamos de shared.module.ts
import { SharedModule } from './shared/shared.module';

// importamos de prime-ng.module.ts
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWordComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PrimeNgModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [HelloWordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
