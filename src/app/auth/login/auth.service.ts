import { Router } from '@angular/router';
import { Injectable, EventEmitter, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { User } from 'src/app/models/user';



@Injectable()
export class AuthService {
    private usuarioAutenticado: boolean = false;



    constructor(private http: HttpClient, private router: Router) { }

  

  login(email:string, senha:string){
    this.http.get<any>("http://localhost:3000/usuarios")
    .subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.email === email && a.senha === senha
        });
        if(user){
            this.usuarioAutenticado = true;
          }else{
            this.usuarioAutenticado = false;
            alert('Email ou senha incorretos');
          }
    
        }, err=>{
          alert('Something was wrong');
        })


  }
usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}