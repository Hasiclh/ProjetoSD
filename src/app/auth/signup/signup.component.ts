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
      tipoDeAtendimento: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      bairro: [null, [Validators.required]]
    });
  }

  setUserCategoryValidators() {
    const tipoDeAtendimentoControl = this.signupForm.get('tipoDeAtendimento');
    const valorControl = this.signupForm.get('valor');
    const bairroControl = this.signupForm.get('bairro');

    // @ts-ignore	
    this.signupForm.get('user').valueChanges
      .subscribe(user => {
        if (user === 'paciente') {
          // @ts-ignore	
          tipoDeAtendimentoControl.setValidators(null);
          // @ts-ignore	
          valorControl.setValidators(null);
          // @ts-ignore	
          bairroControl.setValidators(null);
        }

        if (user === 'terapeuta') {
          // @ts-ignore	
          tipoDeAtendimentoControl.setValidators([Validators.required]);
          // @ts-ignore	
          valorControl.setValidators([Validators.required]);
          // @ts-ignore	
          bairroControl.setValidators([Validators.required]);
        }
        // @ts-ignore	
        tipoDeAtendimentoControl.updateValueAndValidity();
        // @ts-ignore	
        valorControl.updateValueAndValidity();
        // @ts-ignore	
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

