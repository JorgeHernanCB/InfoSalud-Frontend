import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pagina de home
import { HomePageComponent } from './shared/pages/home-page/home-page.component';


export const routes: Routes = [

  { path: 'home', component: HomePageComponent },
  { path:'auth',loadChildren: () => import('./admin/auth/auth.module').then(m => m.AuthModule)},
  {
    path:'proveedores',
    loadChildren: () => import('./catalogueOfActivities/pages/proveedores/proveedores.module').then(m => m.ProveedoresModule)
  },
  {
    path:'convenios',
    loadChildren: () => import('./catalogueOfActivities/pages/convenios/convenios.module').then(m => m.ConveniosModule)
  },

  {path:'administracion', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)},




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
