// Para crear este componente:
// ng g c components/ngStyle -it -is

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      ¡Hola mundo!
    </p>

    <button class="btn btn-primary" (click)="size = size - 7">
      <i class="fa fa-minus"></i>
    </button>
    
    <button class="btn btn-success" (click)="size = size + 7">
      <i class="fa fa-plus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  public size: number = 14;

  constructor() { }

  ngOnInit(): void {
  }

}
