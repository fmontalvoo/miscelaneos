// Para crear este componente:
// ng g c components/usuario/detalleUsuario -is -it --flat --skipTests=true

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  template: `
    <p>
      detalle-usuario works!
    </p>
  `,
  styles: [
  ]
})
export class DetalleUsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    let id: number = Number(this.route.parent.snapshot.paramMap.get('id'));
    console.log(`Detalle Id: ${id}`);
  }

  ngOnInit(): void {
  }

}
