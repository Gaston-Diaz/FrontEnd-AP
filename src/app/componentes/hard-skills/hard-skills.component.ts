import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { LoginService } from 'src/app/service/login.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  skill: Skill[] = [];
  islogged = false;

  constructor(private skillS: SkillService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.cargarSkill();

    if(this.loginService.getIdToken() != ""){
        this.islogged = true;
    }
  }

  cargarSkill():void{
    this.skillS.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }
  
  delete(id: number):void{
    let text = "¿Seguro que desea eliminar esta Skill?";
    if(confirm(text) == true){
      if(id != undefined){
         this.skillS.delete(id).subscribe(
         data => {
          this.cargarSkill();
         }, err => {
          alert("no se pudo eliminar");
         }
        )
      }
    }
  }
}
