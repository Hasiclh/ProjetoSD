import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-t',
  templateUrl: './signup-t.component.html',
  styleUrls: ['./signup-t.component.css']
})
export class SignupTComponent implements OnInit {
  estaCarregando: boolean = false;


  public signupTForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }


  
  ngOnInit(): void {
    this.signupTForm = this.formBuilder.group({
      nome: [''],
      telefone: [''],
      email: [""],
      senha: [],
      tipo: [1]
    })
  }

}
