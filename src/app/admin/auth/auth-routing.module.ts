import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
  path: '',
  children: [
    {path:'login', component: LoginComponent},

    {path: '', redirectTo: 'login', pathMatch: 'full'},

    // {path:'**', redirectTo: 'login'}
  ]
}
]

//{path: 'login', component: LoginComponent},
// { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
//  { path: '**', redirectTo: '/home' } // Maneja rutas no definidas

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
