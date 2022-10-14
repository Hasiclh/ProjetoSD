import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup|any;
  constructor(private _http:HttpClient, private _route:Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(['', [Validators.required]]),
      'senha': new FormControl( )
    })
  }
  logindata(login:FormGroup){
    // console.log(this.login.value);
     this._http.get<any>("http://localhost:3000/usuarios")
     .subscribe(res=>{
       const user = res.find((a:any)=>{
         return a.email === this.login.value.email && a.senha === this.login.value.senha
       });
 
       if(user){
         this.login.reset();
         this._route.navigate(['/']);
       }else{
         alert('Email ou senha incorretos');
         this._route.navigate(['login']);
       }
 
     }, err=>{
       alert('Something was wrong');
     })
    
 
   }
}