import { Time } from "@angular/common";

export interface ListaT {
    nome:string;
    sobrenome:string;
    tipoDeAtendimento: string;
    bairro: string;
    valor: number;
    hora?:Time;
    data?:Date;
}
