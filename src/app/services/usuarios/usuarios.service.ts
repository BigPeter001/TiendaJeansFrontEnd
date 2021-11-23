import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from  'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public obtenerUsuarios(): Promise<any> {
    const url = environment.apiUrl + '/obtenerUsuarios';
    return this.http.get(url).toPromise();
  }
  public obtenerUsuario(id: number){}
  public agregarUsuario(usuario: any){}
  public actualizarUsuario(usuario: any){}

  public eliminarUsuario(id: number): Promise<any>{

    return this.http.delete(environment.apiUrl +'/eliminarUsuario/' + id ).toPromise();

  }

}
