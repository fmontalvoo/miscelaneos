// Para crear este componente:
// ng g c components/usuario --skipTests=true

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`ID: ${id}`);
  }

  ngOnInit(): void {
  }

}
