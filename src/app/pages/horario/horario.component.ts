import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  consultaForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 

  }
  

  ngOnInit(): void {
    this.consultaForm = this.formBuilder.group({
      email:['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
    })
  }
  consulta(){
    if (this.consultaForm.valid) {
      this.http.post<any>("http://localhost:3000/consultas", this.consultaForm.value)
        .subscribe(res => {
          alert("Consulta agendada com sucesso");
          this.consultaForm.reset();
        }, err => {
          alert("Alguma coisa deu errada")
        });
    }

  }

}
