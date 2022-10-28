import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ListaT } from 'src/app/models/lista-t';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HorarioComponent } from '../horario/horario.component';
import { Consultas } from 'src/app/models/consultas';



@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css']
})
export class AgendarConsultaComponent implements OnInit {

  terapeuta = {} as ListaT;
  terapeutas: ListaT[] | undefined;
  consultas: Consultas[] | undefined;


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

  getPacientes(): Observable<ListaT[]> {
    return this.httpClient.get<ListaT[]>(this.url)
      .pipe(
        retry(2))
  }

  agendarConsulta() {
    let dialogRef = this.dialog.open(HorarioComponent, {
      width: '250px',
      data: { hora: this.terapeutas, data: this.terapeutas }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.httpClient.post<any>("http://localhost:3000/consultas", result).subscribe(res => {
      this.hora = result
    });
  })
  }

ngOnInit(): void {
  this.getT();

}

}
