// Para crear este componente:
// ng g c components/ngSwitch -is

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {

  public alerta: string = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
