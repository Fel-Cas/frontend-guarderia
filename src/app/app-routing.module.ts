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
import { SignupPropietarioComponent } from './components/signup-propietario/signup-propietario.component';
import { ListPropietarioComponent } from './components/list-propietario/list-propietario.component';
import { InfoMascotaComponent } from './components/info-mascota/info-mascota.component';
import { ModalComponent } from './components/modal/modal.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
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
    path: 'edit-mascota/:id',
    component: SignupMascotaComponent
  },
  {
    path: 'signup-propietario',
    component: SignupPropietarioComponent
  },
  {
    path: 'list-propietario',
    component: ListPropietarioComponent
  },
  {
    path: 'edit-propietario/:id',
    component: SignupPropietarioComponent
  },
  {
    path: 'info-mascota/:id',
    component: InfoMascotaComponent
  },
  {
    path: 'agendar-cita/:id',
    component: AgendarCitaComponent
  },
  {
    path:'unauthorized',
    component:UnauthorizedComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
