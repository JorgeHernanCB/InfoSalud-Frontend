import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConveniosComponent } from './convenios.component';
import { ModificarConveniosComponent } from './pages/modificar-convenios/modificar-convenios.component';
import { NuevoConveniosComponent } from './pages/nuevo-convenios/nuevo-convenios.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ConveniosComponent
      },
      {
        path: 'nuevo-convenios',
        component: NuevoConveniosComponent
      },
      {
        path: 'mostrar/:id',
        component: ModificarConveniosComponent,
        data: { isViewMode: true}
      },
      {
        path: 'editar/:id',
        component: ModificarConveniosComponent,
        data: { isViewMode: false}
      },
      {
        path: '**',
        redirectTo: 'convenios',
      }
    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ConveniosRoutingModule { }
