import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConveniosComponent } from './convenios.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ConveniosComponent
      }
    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule  ],

})
export class conveniosRoutingModule { }
