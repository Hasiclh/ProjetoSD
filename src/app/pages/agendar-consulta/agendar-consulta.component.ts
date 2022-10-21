import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ListaT } from 'src/app/models/lista-t';
import {MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css']
})
export class AgendarConsultaComponent implements OnInit {

  terapeuta = {} as ListaT;
  terapeutas: ListaT[] | undefined;

  url = 'http://localhost:3000/usuarios?user=terapeuta'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getTerapeutas(): Observable<ListaT[]> {
    return this.httpClient.get<ListaT[]>(this.url)
      .pipe(
        retry(2))
  }
  getT() {
    this.getTerapeutas().subscribe((terapeutas: ListaT[]) => {
      this.terapeutas = terapeutas;
    });
   }

   agendarConsulta(terapeuta: ListaT) {
    this.httpClient.post<any>("http://localhost:3000/consultas", this.terapeuta)
    this.terapeuta = { ...terapeuta };
  }

  ngOnInit(): void {
    this.getT();

  }

}
