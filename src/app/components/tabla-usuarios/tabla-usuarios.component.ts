import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {

  @Input() subtitulo: string = '';
  //@Output() mostrarAlerta = new EventEmitter();

  public usuarios: UsuarioModel[] = [];

  constructor(private usuariosService: UsuariosService, private router: Router) { }


  async ngOnInit(): Promise<void> {
    console.log(this.subtitulo);
    this.usuarios = await this.obtenerCanciones();
  }

  private async obtenerCanciones(): Promise<any>{
    try {
        const response = await this.usuariosService.obtenerUsuarios();
        return response.data;
    } catch (error) {
      console.log(error);
      this.router.navigate(['/error']);
    }
  }

public eliminarUsuario( id: number)  {
  this.usuariosService.eliminarUsuario(id).then(async (response) => {
    if(response.message ==='Eliminación de Usuario'){
      this.usuarios = await this.obtenerCanciones();
      alert('Cancion eliminada correctamente');
    }
  }).catch(error => {
    console.log(error);
    this.router.navigate(['/error']);
  })
}

public actualizarUsuario( usuario: any)  {
  localStorage.setItem('usuarioActualizar', JSON.stringify(usuario));
  this.router.navigate(['/formularioUsuario']);
  console.log('Actualizar usuario');

}

}
