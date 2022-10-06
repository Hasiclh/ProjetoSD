import { Component, OnInit, Input } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
selector: 'app-terapeutas-lista',
templateUrl: './terapeutas-lista.component.html',
styleUrls: ['./terapeutas-lista.component.css'],
})

export class TerapeutasListaComponent implements OnInit {
@Input() terapeutas = [];

constructor() {}

ngOnInit(): void {}
}