import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public login(){
    this.router.navigate(['/login']);
  }

  isLogged(){
    return this.loginService.islogged();
  }

  logout(){
    this.loginService.logout();
    
  }
}
