import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
      const email = form.value.email;
      const password = form.value.password;
      
      if(email != "" && password != ""){
         this.loginService.login(email,password);
      }else if (email == ""){
         alert("El email es un campo requerido para realizae el login");
      }else
      alert("La contraseña es un campo requerido para realizar el login");
  }

}