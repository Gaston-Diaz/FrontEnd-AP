import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  islogged = false;

  constructor(private educacionS: EducacionService, private loginService:LoginService) { }


  ngOnInit(): void {
    this.cargarEducacion();

    if(this.loginService.getIdToken() != ""){
        this.islogged = true;
    }
  }

  cargarEducacion():void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }
  delete(id: number):void{
    let text = "¿Seguro que desea eliminar esta Educación?";
    if (confirm(text) == true) {
      if(id != undefined){
        this.educacionS.delete(id).subscribe(
        data => {
        this.cargarEducacion();
        }, err =>{
        alert("no se pudo eliminar");
        } 
        )
      }
    }
  }
}
