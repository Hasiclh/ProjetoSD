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
  constructor(private formBuilder: FormBuilder) { 

  }
  



  
  ngOnInit(): void {
    this.consultaForm = this.formBuilder.group({
      email:['', Validators.required],
      time: ['', Validators.required],
      data: ['', Validators.required]
    })
  }

}
