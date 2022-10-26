import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { LoginService } from 'src/app/service/login.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[] = [];
  islogged = false;

  constructor(private proyectoS: ProyectoService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.cargarProyecto();

    if(this.loginService.getIdToken() != ""){
        this.islogged = true;
    }
  }

  cargarProyecto():void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyecto = data;
      }
    )
  }

  delete(id:number):void{
    let text = "¿Seguro que desea eliminar este Proyecto?";
    if(confirm(text)==true){
      if(id != undefined){
        this.proyectoS.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err => {
          alert("no se pudo eliminar");
        }
        )
      }
    }
  }
}
