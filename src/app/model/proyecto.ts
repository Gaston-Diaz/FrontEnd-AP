export class Proyecto {
    id?: number;
    nombreP: string;
    enlace: string;
    descripcionP: string;
    fecha: string;

    constructor (nombreP: string, enlace: string, descripcionP: string, fecha: string){
        this.nombreP = nombreP;
        this.enlace = enlace;
        this.descripcionP = descripcionP;
        this.fecha = fecha;
    }
}

