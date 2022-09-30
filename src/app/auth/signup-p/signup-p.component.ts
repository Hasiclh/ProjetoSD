import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-p',
  templateUrl: './signup-p.component.html',
  styleUrls: ['./signup-p.component.css']
})
export class SignupPComponent implements OnInit {

  isSelected: boolean = true;

  
  

  public signupPForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }


  ngOnInit(): void {
    this.signupPForm = this.formBuilder.group({
      nome: [''],
      telefone: [''],
      email: [""],
      senha: [],
      tipo: [1]
    })
  }
  signUPP() {
    this.http.post<any>("http://localhost:3000/usuarios", this.signupPForm.value)
      .subscribe(res => {
        alert("Cadastrado com sucesso");
        this.signupPForm.reset();
      }, err => {
        alert("Alguma coisa deu errada")
      })
  }  
}



