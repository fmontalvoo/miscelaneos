// Para crear este componente:
// ng g c components/clases -is

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  public alertClass: string = "alert-success";

  public obj: any = {
    primary: true
  }

  public guardando: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    this.guardando = true;
    setTimeout(() => this.guardando = false, 3000);
  }

}
