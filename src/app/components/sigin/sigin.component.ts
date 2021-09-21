import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth/auth.service';
@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  user={
    username:'',
    password:''
  }
  constructor(private service:AuthService,
    private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  signIn(){
    this.service.signIn(this.user).subscribe(res=>{
        localStorage.setItem('token',res['token']);
        this.router.navigate(['/list-empleado']);
    },err=>{
      this.toastr.error('Usuario o contraseña incorrecta', 'Ingreso Fallido!');
    })
  }
}
