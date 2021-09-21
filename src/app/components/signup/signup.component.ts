import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadosService } from 'src/app/service/empleados/empleados.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  empleadoForm=new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    secondName: new FormControl(),
    firstlastName: new FormControl(),
    secondlastName: new FormControl(),
    email:new FormControl(),
    birthday: new FormControl(),
    phoneNumber: new FormControl(),
    salary:new FormControl(),
    role:new FormControl()
  });
  accion = 'Registrar Empleado';
  id: string | null;

  constructor(private authService:AuthService,
    private router:Router,
    private aRouter: ActivatedRoute,
    private empleadoService: EmpleadosService,
    private toastr: ToastrService) { 
      this.id= this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  signUp(){
    const salario = parseInt(this.empleadoForm.value.salary, 10);
    if(this.id !== null){
      this.empleadoService.actualizarEmpleado(this.id, this.empleadoForm.value).subscribe(
        data => {
          this.toastr.success('El empleado fue actualizado con éxito!', 'Empleado Actualizado!');
          this.router.navigate(['/list-empleado']);
        },
        err => {
        }
      )
    } else {
      this.empleadoService.crearEmpleado(this.empleadoForm.value).subscribe(
        res=>{
          this.toastr.success('El empleado fue registrado con éxito!', 'Empleado Registrado!');
          this.router.navigate(['/list-empleado']);
        },
        err=>{
          if(err.error.errors != null){
            this.toastr.error(err.error.errors[0].msg, 'Hubo un error!');
          } else {
            this.toastr.error(err.error.message, 'Hubo un error!');
          }                    
        }
      )
    }    
  }

  esEditar() {
    if(this.id !== null) {
      this.accion = 'Editar';
      this.empleadoService.obtenerEmpleado(this.id).subscribe(data => {
        this.empleadoForm.setValue({          
          id: data.empleado.id,
          firstName: data.empleado.firstName,
          secondName: data.empleado.secondName,
          firstlastName: data.empleado.firstlastName,
          secondlastName: data.empleado.secondlastName,
          email: data.empleado.email,
          salary: data.empleado.salary,
          birthday: data.empleado.birthday,
          phoneNumber: data.empleado.phoneNumber,
          role: data.empleado.role
        })
      })
    }
  }
}
