import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pagina de home
import { HomePageComponent } from './shared/pages/home-page/home-page.component';


export const routes: Routes = [

  { path: 'home', component: HomePageComponent },

  { path:'auth',loadChildren: () => import('./admin/auth/auth.module').then(m => m.AuthModule)},

  {path:'proveedores',loadChildren: () => import('./catalogueOfActivities/pages/proveedores/proveedores.module').then(m => m.ProveedoresModule)},

  {path:'convenios',loadChildren: () => import('./catalogueOfActivities/pages/convenios/convenios.module').then(m => m.ConveniosModule)},

  {path:'administracion', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)},

  {path:'facturas', loadChildren: () => import('./catalogueOfActivities/pages/facturas/facturas.module').then(m => m.FacturasModule)},

  {path:'autorizaciones', loadChildren: () => import('./catalogueOfActivities/pages/autorizaciones/autorizaciones.module').then(m => m.AutorizacionesModule)},

  {path:'auditorias', loadChildren: () => import('./catalogueOfActivities/pages/auditorias/auditorias.module').then(m => m.AuditoriasModule)},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
