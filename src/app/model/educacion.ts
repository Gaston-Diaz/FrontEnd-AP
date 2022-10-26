export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaIni: string;
    fechaFin: string;

    constructor(nombreE: string, descripcionE:string, fechaIni: string, fechaFin: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
    }
}
