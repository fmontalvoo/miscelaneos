// Para crear este componente:
// ng g c components/usuario/nuevoUsuario -is -it --flat

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  template: `
    <p>
      nuevo-usuario works!
    </p>
  `,
  styles: [
  ]
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    let id: number = Number(this.route.parent.snapshot.paramMap.get('id'));
    console.log(`Nuevo Id: ${id}`);
  }

  ngOnInit(): void {
  }

}
