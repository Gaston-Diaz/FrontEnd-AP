export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    fechaIni : string;
    fechaFin : string;

    constructor(nombreE: string, descripcionE: string, fechaIni: string, fechFin: string ){
        this.nombreE= nombreE;
        this.descripcionE= descripcionE;
        this.fechaIni=fechaIni;
        this.fechaFin=fechFin;
    }
}

