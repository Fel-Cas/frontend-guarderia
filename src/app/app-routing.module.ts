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
import { CitasComponent } from './components/citas/citas.component';
import { EditarCitaComponent } from './components/editar-cita/editar-cita.component';
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
    component: ListEmpleadoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit-empleado/:id',
    component: SignupComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signup-mascota',
    component: SignupMascotaComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'list-mascota',
    component: ListMascotaComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-mascota/:id',
    component: SignupMascotaComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signup-propietario',
    component: SignupPropietarioComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'list-propietario',
    component: ListPropietarioComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-propietario/:id',
    component: SignupPropietarioComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'info-mascota/:id',
    component: InfoMascotaComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'agendar-cita/:id',
    component: AgendarCitaComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'citas',
    component: CitasComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'editar-cita/:id',
    component: EditarCitaComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'unauthorized',
    component:UnauthorizedComponent,
    canActivate:[AuthGuard]
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
