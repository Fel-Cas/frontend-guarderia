import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  empleadoForm: FormGroup;
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
    private aRouter: ActivatedRoute) { 
      this.id= this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  signUp(){
    const salario = parseInt(this.empleado.salary, 10);
    console.log(salario);
    this.authService.signUp(this.empleado).subscribe(
      res=>{
        this.router.navigate(['/signup'])
      },
      err=>{
        console.log(err);
      }
    )
  }

  esEditar() {
    if(this.id !== null) {
      this.accion = 'Editar';
      this.authService.obtenerEmpleado(this.id).subscribe(data => {        
        console.log(data.empleado.id);
        /*this.empleadoForm.setValue({          
          id: data.empleado.id,
          firstName: data.empleado.firstName,
          secondName: data.empleado.secondName,
          firstlastName: data.empleado.firstlastName,
          secondlastName: data.empleado.secondlastName,
          email: data.empelado.email,
          salary: data.empleado.salary,
          birthday: data.empleado.birthday,
          phoneNumber: data.empleado.phoneNumber,
          role: data.empleado.role
        })*/
      })
    }
  }
}
