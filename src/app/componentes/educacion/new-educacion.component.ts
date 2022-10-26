import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  fechaIni: string;
  fechaFin: string;

  constructor(private sEducacion: EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const edu = new Educacion(this.nombreE,this.descripcionE, this.fechaIni,this.fechaFin);
    this.sEducacion.save(edu).subscribe(
      data =>{
        this.router.navigate(['']);
      },err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }

}
