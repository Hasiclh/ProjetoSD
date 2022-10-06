import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //user:boolean = false;
  visible: boolean = false;
  user: any 


  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
      telefone: [''],
      email: [""],
      senha: [''],
      user: ['',Validators.required],
      tipoDeAtendimento: [""],
      valor:[""],
      bairro: [""]
    })
  }
  signUP() {
    this.http.post<any>("http://localhost:3000/usuarios", this.signupForm.value)
      .subscribe(res => {
        alert("Cadastrado com sucesso");
        this.signupForm.reset();
      }, err => {
        alert("Alguma coisa deu errada")
      })

  }


  getRadioValor(event: any): void {
    if (event.target.value == "terapeuta") {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }


}

