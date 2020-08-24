// Para crear este componente:
// ng g c components/css -it -is

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [
    `
    p{
      color:blue;
      font-size: 21px;
    }
    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
