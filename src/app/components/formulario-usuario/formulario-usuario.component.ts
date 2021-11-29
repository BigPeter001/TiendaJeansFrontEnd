import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});

  public usuarioActualizar: UsuarioModel | null = null;

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService, private router: Router) {

   }

  ngOnInit(): void {
    const actualizar = localStorage.getItem('usuarioActualizar');
    this.usuarioActualizar = actualizar ? JSON.parse(actualizar) : null;
    console.log(this.usuarioActualizar);
    this.buildForm();

  }

  public buildForm() {
    this.formGroup = this.formBuilder.group({
      usuario_nombre:[this.usuarioActualizar?.usuario_nombre, Validators.required],
      usuario_email:[this.usuarioActualizar?.usuario_email, [Validators.required,Validators.email]]
    });
  }

  public agregarUsuario(){

    console.log(this.formGroup.value);
    this.usuariosService.agregarUsuario(this.formGroup.value).then(response => {
      alert('Usuario agregado correctamente');
      this.router.navigate(['/usuarios']);
    }).catch(error => { 
      this.router.navigate(['/error']);
    })
  }

  public actualizarUsuario(){
    console.log("Actualizar usuario");
    console.log(this.formGroup.value);
    const usuario: UsuarioModel = {
      usuario_id: this.usuarioActualizar?.usuario_id, 
      ...this.formGroup.value
    }
    this.usuariosService.actualizarUsuario(usuario).then(response =>{

      if(response.message === 'Actualizar Usuario'){
        alert("Usuario Actualizado Correctamente");
        this.router.navigate(['/usuarios']);
      }
    }).catch(error =>{
      this.router.navigate(['/error']);
    })



  }
  

}
