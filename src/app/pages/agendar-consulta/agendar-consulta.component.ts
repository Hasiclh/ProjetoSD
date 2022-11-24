import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import { retry,  } from 'rxjs/operators';
import { ListaT } from 'src/app/models/lista-t';
import { MatDialog,  } from '@angular/material/dialog';
import { HorarioComponent } from '../horario/horario.component';



@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css']
})
export class AgendarConsultaComponent implements OnInit {

  terapeuta = {} as ListaT;
  terapeutas: ListaT[] | undefined;


  hora!: number;
  data!: number;

  urlT = 'http://localhost:3000/usuarios?user=terapeuta'
  url = 'http://localhost:3000/usuarios'

  constructor(private httpClient: HttpClient, public dialog: MatDialog) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getTerapeutas(): Observable<ListaT[]> {
    return this.httpClient.get<ListaT[]>(this.urlT)
      .pipe(
        retry(2))
  }

  getT() {
    this.getTerapeutas().subscribe((terapeutas: ListaT[]) => {
      this.terapeutas = terapeutas;
    });
  }



  agendarConsulta() {
    const dialogRef = this.dialog.open(HorarioComponent, {
    });
  }

ngOnInit(): void {
  this.getT();

}

}
