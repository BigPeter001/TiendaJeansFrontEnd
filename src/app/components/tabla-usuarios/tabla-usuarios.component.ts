import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerCanciones();
  }

  private obtenerCanciones(){
    try {
        const response = this.usuariosService.obtenerUsuarios();
        console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}
