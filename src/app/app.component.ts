import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaPortfolio';

  ngOnInit():void{

    firebase.initializeApp({
      apiKey: "AIzaSyAgIWDHYrmMSwXtAx0LFwXpRvngJYBmkrE",
      authDomain: "portfolioap-v3.firebaseapp.com",
    })
  }
}
