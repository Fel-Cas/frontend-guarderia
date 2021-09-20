import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private url='https://back-pets.herokuapp.com';
  private url='http://localhost:3000';
  constructor(private http:HttpClient,private router:Router) { }

  
  signIn(user){
    return this.http.post(this.url+'/api-auth/',user);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}
