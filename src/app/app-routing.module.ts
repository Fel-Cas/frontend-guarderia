import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { SignupComponent } from './components/signup/signup.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { AuthGuard } from './guard/auth.guard';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { InicioComponent } from './components/inicio/inicio.component';

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
    path:'signup/:id',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }