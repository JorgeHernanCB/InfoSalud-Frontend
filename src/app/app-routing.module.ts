import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './admin/auth/login/login.component';
import { AuthModule } from './admin/auth/auth.module';

//Quitamos componentes que no se usan
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ProveedoresComponent } from './catalogueOfActivities/pages/proveedores/proveedores.component';
import { ConveniosComponent } from './catalogueOfActivities/pages/convenios/convenios.component';
import { proveedores } from './catalogueOfActivities/models/interface/dBproveedores.interface';


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
    path:'auth',
    loadChildren: () => import('./admin/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'administracion',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  },
    { path: 'home', component: HomePageComponent }



  //TODO - Hacer que la ruta de administracion sea dinamica
  //{path:'login',component: LoginComponent},
  //{path: '', redirectTo: '/home', pathMatch: 'full'}

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
