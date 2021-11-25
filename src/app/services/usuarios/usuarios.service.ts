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
  public agregarUsuario(usuario: any): Promise<any>{

    return this.http.post(environment.apiUrl +'/agregarUsuario', usuario).toPromise();

  }
  public actualizarUsuario(usuario: any): Promise<any>{

    return this.http.put(environment.apiUrl +'/actualizarUsuario/' + usuario.id, usuario).toPromise();

  }

  public eliminarUsuario(id: number): Promise<any>{

    return this.http.delete(environment.apiUrl +'/eliminarUsuario/' + id ).toPromise();

  }

}
