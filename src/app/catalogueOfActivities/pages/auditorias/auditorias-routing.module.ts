import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditoriasComponent } from './auditorias.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: AuditoriasComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditoriasRoutingModule {}
