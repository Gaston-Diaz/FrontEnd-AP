import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { LoginService } from 'src/app/service/login.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: persona = new persona("","","","","","",""); 
  islogged = false;

  constructor(public personaService: PersonaService, private loginService:LoginService) { }
  
  ngOnInit(): void {

    /*this.personaService.getPersona().subscribe(data => {this.persona = data})*/
    this.cargarPersona();

    if(this.loginService.getIdToken() != ""){
        this.islogged = true;
    }
  }
  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data =>{
        this.persona = data
      }
    )
  }

}
