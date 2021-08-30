import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router:Router) { }

  ngOnInit(): void {
  }
  signIn(){
    this.service.signIn(this.user).subscribe(res=>{
        console.log(res)
        localStorage.setItem('token',res['token']);
        this.router.navigate(['/signup'])
    },err=>{
      console.log(err)
    })
  }
}
