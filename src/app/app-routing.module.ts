import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Quitamos componentes que no se usan
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AdministracionComponent } from "./shared/pages/administracion-page/administracion-page.component";
import { ProveedoresComponent } from './catalogueOfActivities/pages/proveedores/proveedores.component';
import { ConveniosComponent } from './catalogueOfActivities/pages/convenios/convenios.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { proveedores } from './catalogueOfActivities/models/proveedores.interface';


export const routes: Routes = [

  {
    path:'proveedores',
    loadChildren: () => import('./catalogueOfActivities/pages/proveedores/proveedores.module').then(m => m.ProveedoresModule)
  },
  {
    path:'convenios',
    loadChildren: () => import('./catalogueOfActivities/catalogueOfActivities.module').then(m => m.catalogueOfActivitiesModule)
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }

    // { path: 'home', component: HomePageComponent },
    // { path: 'proveedores', component: ProveedoresComponent },
    // { path: 'convenios', component: ConveniosComponent },
    // { path: 'administration', component: AdministracionComponent},
    // {path: 'login', component: LoginComponent},
    // { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
    //  { path: '**', redirectTo: '/home' } // Maneja rutas no definidas

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
