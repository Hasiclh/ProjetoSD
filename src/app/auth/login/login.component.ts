import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuarioAutenticado: boolean = false;

  form:FormGroup|any;
  constructor(private _http:HttpClient, private route:Router, private fb:FormBuilder, private authService: AuthService) { 

    this.form = new FormGroup({
      'email': new FormControl(['']),
      'senha': new FormControl('')
    })
  }

  ngOnInit(): void {

  }
  logindata(){
    // console.log(this.login.value);
    const val = this.form.value;

      this.authService.login(val.email, val.senha)

    
 
   }

  }
