import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AgendarConsultaComponent } from './pages/agendar-consulta/agendar-consulta.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: 'agendar-consulta', component: AgendarConsultaComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
