import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './components/errors/errors.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'usuarios',component: UsuariosComponent
  },

  {
    path:'formularioUsuario',component: FormularioUsuarioComponent
  },
 
  {
    path:'error',component: ErrorsComponent
  },

  {
    path:'',component: UsuariosComponent
  },


  {
    path:'**',component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
