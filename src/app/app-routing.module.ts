import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { MainLoginComponent } from './shared/pages/mainLogin/main-login.component';
import { AuthGuard } from './auth/login/auth-guard.service';

const routes: Routes = [
    //path: 'dashboard', loadChildren: () => import('./router/dashboard/dashboard.module').then(m => m.DashboardModule)

    { path: 'login', component: MainLoginComponent },
    { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
    //{ path: 'crud', component: CrudComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
    { path: '**', redirectTo: '/login' } // Maneja rutas no definidas

    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
