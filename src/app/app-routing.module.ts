import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { MainLoginComponent } from './shared/pages/mainLogin/main-login.component';
const routes: Routes = [
            {

            path: 'homePage',
            component: HomePageComponent
            },
            {
              path: 'mainLogin',
              component: MainLoginComponent
            },
            {
              path: '**',
              redirectTo: 'homePage'
            }
                //path: 'dashboard', loadChildren: () => import('./router/dashboard/dashboard.module').then(m => m.DashboardModule)

              ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
