import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
    private router:Router) { }

  ngOnInit(): void {
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
}
