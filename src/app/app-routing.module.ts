import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { SignupComponent } from './components/signup/signup.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { AuthGuard } from './guard/auth.guard';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SignupMascotaComponent } from './components/signup-mascota/signup-mascota.component';
import { ListMascotaComponent } from './components/list-mascota/list-mascota.component';

import{UnauthorizedComponent} from'./components/unauthorized/unauthorized.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'

  },
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'signin',
    component:SiginComponent
  },
  {
    path:'list-empleado',
    component: ListEmpleadoComponent
  },
  {
    path:'edit-empleado/:id',
    component: SignupComponent
  },
  {
    path: 'signup-mascota',
    component: SignupMascotaComponent
  },
  {
    path: 'list-mascota',
    component: ListMascotaComponent
  },
  {
    path:'edit-mascota/:id',
    component: SignupMascotaComponent
  },
  {
    path:'unauthorized',
    component:UnauthorizedComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
