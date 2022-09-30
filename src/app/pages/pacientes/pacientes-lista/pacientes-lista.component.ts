import { Component, OnInit, Input } from '@angular/core';

@Component({
selector: 'app-pacientes-lista',
templateUrl: './pacientes-lista.component.html',
styleUrls: ['./pacientes-lista.component.css'],
})

export class PacientesListaComponent implements OnInit {
@Input() pacientes = [];

constructor() {}

ngOnInit(): void {}
}