import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedoresComponent } from './proveedores.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresComponent,
    children: [
      {
        path: 'proveedores',
        component: ProveedoresComponent
      },
      {
        path: 'caracteristicas',
        component: CaracteristicasComponent
      },
      {
        path: '**',
        redirectTo: 'proveedores',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ProveedoresRoutingModule { }
