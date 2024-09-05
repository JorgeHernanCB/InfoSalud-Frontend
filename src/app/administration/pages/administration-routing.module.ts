import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { SeguridadComponent } from './seguridad/seguridad.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'perfil', component: PerfilComponent},
      {path: 'parametros', component: ParametrosComponent},
      {path: 'seguridad', component: SeguridadComponent},

      // {
      //   path: '**',
      //   redirectTo: 'proveedores',
      // }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AdministrationRoutingModule { }
