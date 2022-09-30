import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
//import { CabecalhoComponent } from './cabecalho/cabecalho.component';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './auth/login/login.component';
import { SignupPComponent } from './auth/signup-p/signup-p.component';
import { SignupTComponent } from './auth/signup-t/signup-t.component';


@NgModule({

    declarations: [

        AppComponent,
        SignupPComponent,
        SignupTComponent,
        LoginComponent
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
        HttpClientModule
    ],

    
    providers: [],

    bootstrap: [AppComponent]
})

export class AppModule { }