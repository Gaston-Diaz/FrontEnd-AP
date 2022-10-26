import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  enlace: string;
  fecha: string;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyecto(this.nombreP,this.enlace,this.descripcionP,this.fecha);
    this.proyectoS.save(proyecto).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err=>{
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }

}

