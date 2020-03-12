import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Exercise 3';
  image1: string;
  alt1: string;

  constructor() {
    this.image1 = 'assets/images/dice/side1.png';
    this.alt1 = 'side 1';
  }
  roll(){
    const rand1 = 1 + Math.floor( 6 * Math.random());
    this.image1 = `assets/images/dice/side${rand1}.png`;
    this.alt1 = `side ${rand1}`;
  }

}
