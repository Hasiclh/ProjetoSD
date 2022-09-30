import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupPComponent } from './auth/signup-p/signup-p.component';
import { SignupTComponent } from './auth/signup-t/signup-t.component';


const routes: Routes = [
  {path: 'signupt', component: SignupTComponent},
  {path: 'signupp', component: SignupPComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
