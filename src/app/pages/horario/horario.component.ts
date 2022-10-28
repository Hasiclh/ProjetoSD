import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ListaT } from 'src/app/models/lista-t';



@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<HorarioComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 

  }
  
  onCancel(): void {
    this.dialogRef.close();
  }


  
  ngOnInit(): void {
  }

}
