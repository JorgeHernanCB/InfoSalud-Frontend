import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedoresComponent } from './proveedores.component';
import { NuevoProveedorComponent } from './pages/nuevo-proveedor/nuevoProveedor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProveedoresComponent
      },
      {
        path: 'nuevo-proveedor',
        component: NuevoProveedorComponent
      },
      {
        path: 'mostrar/:id', 
        component: ProveedoresComponent
      },
      {
        path: 'editar/:id',
        component: ProveedoresComponent
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
