import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask'
import {MatDialogModule} from '@angular/material/dialog';



import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { TerapeutaComponent } from './pages/terapeuta/terapeuta.component';
import { AgendarConsultaComponent } from './pages/agendar-consulta/agendar-consulta.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { AuthService } from './auth/login/auth.service';
import { AuthGuard } from './guard/auth.guard';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({

    declarations: [

        AppComponent,
        SignupComponent,
        LoginComponent,
        HomeComponent,
        PacienteComponent,
        TerapeutaComponent,
        AgendarConsultaComponent,
        HorarioComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatExpansionModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
        MatDialogModule,
        MatDatepickerModule
        
    ],

    
    providers: [AuthService, AuthGuard],

    bootstrap: [AppComponent]
})

export class AppModule { }