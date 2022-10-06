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
  formSubmitted = false;


  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.buildForm();
    this.setUserCategoryValidators();
  }

  buildForm() {
    this.signupForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      user: ['paciente'],
      tipoDeAtendimento:[null, [Validators.required]],
      valor:[null, [Validators.required]],
      bairro: [null, [Validators.required]]
    });
  }

  setUserCategoryValidators() {
    const tipoDeAtendimentoControl = this.signupForm.get('tipoDeAtendimento');
    const valorControl = this.signupForm.get('valor');
    const bairroControl = this.signupForm.get('bairro');

    this.signupForm.get('user').valueChanges
      .subscribe(user => {
        if (user === 'paciente') {
          tipoDeAtendimentoControl.setValidators(null);
          valorControl.setValidators(null);
          bairroControl.setValidators(null);
        }

        if (user === 'terapeuta') {
          tipoDeAtendimentoControl.setValidators([Validators.required]);
          valorControl.setValidators([Validators.required]);
          bairroControl.setValidators([Validators.required]);
        }

        tipoDeAtendimentoControl.updateValueAndValidity();
        valorControl.updateValueAndValidity();
        bairroControl.updateValueAndValidity();
      });
  }

  signUP(event: any) {
    event.preventDefault();
    this.formSubmitted = true;

    if (this.signupForm.valid) {
    this.http.post<any>("http://localhost:3000/usuarios", this.signupForm.value)
      .subscribe(res => {
        alert("Cadastrado com sucesso");
        this.signupForm.reset();
      }, err => {
        alert("Alguma coisa deu errada")
      });
    }
  
}


  getRadioValor(event: any): void {
    if (event.target.value == "terapeuta") {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }


}

