import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/roles.guard';
import { AgendarConsultaComponent } from './pages/agendar-consulta/agendar-consulta.component';
import { HomeComponent } from './pages/home/home.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { TerapeutaComponent } from './pages/terapeuta/terapeuta.component';


const routes: Routes = [
  {path: 'terapeuta', component:TerapeutaComponent, canActivate: [AuthGuard]},
  {path: 'agendar-consulta', component: AgendarConsultaComponent,  canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
