import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public subtituloTabla = 'subtitulo de la tabla';
  constructor() { }

  ngOnInit(): void {
  }

}
