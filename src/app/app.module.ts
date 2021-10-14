import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './service/token/token-interceptor.service';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material/angular-material.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SignupMascotaComponent } from './components/signup-mascota/signup-mascota.component';
import { ListMascotaComponent } from './components/list-mascota/list-mascota.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { SignupPropietarioComponent } from './components/signup-propietario/signup-propietario.component';
import { ListPropietarioComponent } from './components/list-propietario/list-propietario.component';
import { InfoMascotaComponent } from './components/info-mascota/info-mascota.component';
import { ModalComponent } from './components/modal/modal.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { CitasComponent } from './components/citas/citas.component';
import { EditarCitaComponent } from './components/editar-cita/editar-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SiginComponent,
    ListEmpleadoComponent,
    InicioComponent,
    SignupMascotaComponent,
    ListMascotaComponent,
    UnauthorizedComponent,
    SignupPropietarioComponent,
    ListPropietarioComponent,
    InfoMascotaComponent,
    ModalComponent,
    AgendarCitaComponent,
    CitasComponent,
    EditarCitaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
