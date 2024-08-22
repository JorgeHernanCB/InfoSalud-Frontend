import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { MainLoginComponent } from './shared/pages/mainLogin/main-login.component';
import { AdministracionComponent } from "./shared/pages/administracion-page/administracion-page.component";

const routes: Routes = [
    { path: 'login', component: MainLoginComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'administration', component: AdministracionComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
    { path: '**', redirectTo: '/login' } // Maneja rutas no definidas

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
