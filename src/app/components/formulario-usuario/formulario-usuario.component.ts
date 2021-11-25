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
    this.buildForm();

  }

  public buildForm() {
    this.formGroup = this.formBuilder.group({
      usuario_nombre:[this.usuarioActualizar?.usuario_nombre, Validators.required],
      usuario_email:[this.usuarioActualizar?.usuario_email, Validators.required]
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

  

}
