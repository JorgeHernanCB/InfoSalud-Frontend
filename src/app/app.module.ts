import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//importamos de shared.module.ts
import { SharedModule } from './shared/shared.module';

//importamos de catalogueOfActivities.module.ts
import { catalogueOfActivitiesModule } from './catalogueOfActivities/catalogueOfActivities.module';

// importamos de prime-ng.module.ts
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { LoginModule } from './admin/auth/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppLayoutModule,
    catalogueOfActivitiesModule,
    LoginModule,
    SharedModule,
    PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
