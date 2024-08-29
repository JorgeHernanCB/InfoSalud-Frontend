import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AdministracionComponent } from "./shared/pages/administracion-page/administracion-page.component";
import { ProveedoresComponent } from './catalogueOfActivities/pages/proveedores/proveedores.component';
import { ConveniosComponent } from './catalogueOfActivities/pages/convenios/convenios.component';
import { LoginComponent } from './admin/auth/login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: 'convenios', component: ConveniosComponent },
    { path: 'administration', component: AdministracionComponent},
    {path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
    { path: '**', redirectTo: '/home' } // Maneja rutas no definidas

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
