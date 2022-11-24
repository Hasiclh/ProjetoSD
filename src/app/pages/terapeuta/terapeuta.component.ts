import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';
import {User} from 'src/app/models/user'


@Component({
  selector: 'app-terapeuta',
  templateUrl: './terapeuta.component.html',
  styleUrls: ['./terapeuta.component.css']
})
export class TerapeutaComponent implements OnInit {
  paciente= {} as User;
  pacientes: User[] | undefined;

  url = 'http://localhost:3000/consultas'
  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  ngOnInit(): void {
    this.getP();
  }
  
  getPacientes(): Observable<User[]>{
    return this.http.get<User[]>(this.url)
      .pipe(
        retry(2))
  }

  getP() {
    this.getPacientes().subscribe((pacientes: User[]) => {
      this.pacientes = pacientes;
    });
  }


}
