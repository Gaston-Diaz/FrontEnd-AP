import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { LoginService } from 'src/app/service/login.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  islogged = false;

  constructor(private sExperiencia: SExperienciaService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.cargarExperiencia();

    if(this.loginService.getIdToken() != ""){
        this.islogged = true;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }
  delete(id?: number):void{
    let text = "¿Seguro que desea eliminar esta Experiencia?";
    if(confirm(text) == true){
      if(id != undefined){
        this.sExperiencia.delete(id).subscribe(
          data => {
            this.cargarExperiencia();
          }, err =>{
            alert("no se pudo borrar la experiencia");
          }
        )
      }
    }
  }
}
