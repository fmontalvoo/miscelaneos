// Para crear este componente:
// ng g c components/usuario/editarUsuario -is -it --flat --skipTests=true

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  template: `
    <p>
      editar-usuario works!
    </p>
  `,
  styles: [
  ]
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => console.log(`Editar Id: ${params.id}`));
  }

  ngOnInit(): void {
  }

}
