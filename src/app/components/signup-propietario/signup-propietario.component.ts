import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth/auth.service';
import { PropietariosService } from 'src/app/service/propietarios/propietarios.service';

@Component({
  selector: 'app-signup-propietario',
  templateUrl: './signup-propietario.component.html',
  styleUrls: ['./signup-propietario.component.css']
})
export class SignupPropietarioComponent implements OnInit {

  propietarioForm=new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    secondName: new FormControl(),
    firstlastName: new FormControl(),
    secondlastName: new FormControl(),
    email: new FormControl(),
    homeAdress: new FormControl(),
    userCreate: new FormControl()
  });
  accion = 'Registrar Propietario';
  id: string | null;
  constructor(private authService:AuthService,
              private router:Router,
              private aRouter: ActivatedRoute,
              private propietarioService: PropietariosService,
              private toastr: ToastrService) { 
      this.id= this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  signUpPropietario(){
    if(this.id !== null){
      this.propietarioService.actualizarPropietario(this.id, this.propietarioForm.value).subscribe(
        data => {
          this.toastr.success('El propietario fue actualizado con éxito', 'Propietario Actualizado');
          this.router.navigate(['/list-propietario']);
        },
        err => {

        }
      )
    } else {
      this.propietarioService.crearPropietario(this.propietarioForm.value).subscribe( res => {
        this.toastr.success('¡El propietario fue registrado con éxito!', 'Propietario Registrado');
        this.router.navigate(['/list-propietario']);
      }, err => {
        if(err.error.errors != null){
          this.toastr.error(err.error.errors[0].msg, 'Hubo un error');
        }else{
          this.toastr.error(err.error.message, 'Hubo un error');
        }
      })
    }
  }

  esEditar(){
    if(this.id !== null) {
      this.accion = 'Editar';
      this.propietarioService.obtenerPropietario(this.id).subscribe(data => {
        this.propietarioForm.setValue({
          id: data.propietario.id,
          firstName: data.propietario.firstName,
          secondName: data.propietario.secondName,
          firstlastName: data.propietario.firstlastName,
          secondlastName: data.propietario.secondlastName,
          email: data.propietario.email,
          homeAdress: data.propietario.homeAdress,
          userCreate: ''
        })
      })
    }
  }

}
