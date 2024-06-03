import {inject, NgModule} from '@angular/core';
import {CanActivateFn, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AdminComponent} from './pages/admin/admin.component';
import {LandingComponent} from "./pages/landing/landing.component";
import {AuthService} from "./pages/login/auth.service";

const canActivateAdmin: CanActivateFn = () => {
  return inject(AuthService).isLogged()
}

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [canActivateAdmin] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
