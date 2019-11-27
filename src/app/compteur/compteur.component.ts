import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.less']
})
export class CompteurComponent {

  constructor() { }

  public items: String[] = [];
  public counter: number = 0;

  public addItem(message: string = undefined) {
    if(message) {
      this.items.push(message);
    }
    else {
      this.counter++;
      this.items.push('My Item : ' + this.counter);
    }
  }
}
