import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public subtituloTabla = 'subtitulo de la tabla';
  public showAlert = false;

  constructor() { }

  ngOnInit(): void {
  }

  public mostrarAlerta(evento: any){
    this.showAlert = evento.mostrarAlerta;
    setTimeout(() => {
      this.showAlert = false;
    },3000);
    console.log(evento);
  }

}
