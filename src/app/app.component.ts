import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dadoIzquierdo = "../assets/img/dice1.png";
  dadoDerecho = "../assets/img/dice4.png";
 
  numero1 = 0;
  numero2 = 0;
  
  tirarDados() : void {
    this.numero1 = Math.random();
    this.numero2 = Math.random();
    console.log(this.numero1);
    console.log(this.numero2);

  }



}
