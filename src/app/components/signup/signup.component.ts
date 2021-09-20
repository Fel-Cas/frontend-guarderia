import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadosService } from 'src/app/service/empleados/empleados.service';


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
  accion = 'Registrarse';
  id: string | null;

  empleado={
    id:'',
    firstName: '',
    secondName: '',
    firstlastName: '',
    secondlastName: '',
    email:'',
    birthday:'',
    phoneNumber: '',
    salary:'',
    role:''
  }
  constructor(private authService:AuthService,
    private router:Router,
    private aRouter: ActivatedRoute,
    private empleadoService: EmpleadosService) { 
      this.id= this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  signUp(){
    const salario = parseInt(this.empleado.salary, 10);
    console.log(salario);
    if(this.id !== null){
      this.empleadoService.actualizarEmpleado(this.id, this.empleadoForm.value).subscribe(
        data => {
          console.log(data)
        },
        err => {
          console.log(err);
        }
      )
    } else {
      this.authService.signUp(this.empleadoForm.value).subscribe(
        res=>{
          this.router.navigate(['/signup'])
        },
        err=>{
          console.log(err);
        }
      )
    }    
  }

  esEditar() {
    if(this.id !== null) {
      this.accion = 'Editar';
      this.authService.obtenerEmpleado(this.id).subscribe(data => {        
        console.log(data.empleado.id);
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
