import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedoresComponent } from './proveedores.component';
import { NuevoProveedorComponent } from './pages/nuevo-proveedor/nuevoProveedor.component';
import { ModificarProveedorComponent } from './pages/modificar-Proveedor/modificar-Proveedor.component';

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
        component: ModificarProveedorComponent,
        data: { isViewMode: true}
      },
      {
        path: 'editar/:id',
        component: ModificarProveedorComponent,
        data: { isViewMode: false}
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
