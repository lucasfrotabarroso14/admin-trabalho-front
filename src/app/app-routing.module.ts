import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import {LandingComponent} from "./pages/landing/landing.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

// TODO: Criar landing page
// TODO: Criar função para verificar se o usuário está logado. Caso não, redirecionar para o login
// TODO: Melhorar o CSS
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
