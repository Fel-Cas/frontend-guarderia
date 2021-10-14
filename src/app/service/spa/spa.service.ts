import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpaService {
  //private url='https://back-pets.herokuapp.com';
  private url='http://localhost:3000';



  constructor(private http:HttpClient,
              private router:Router) { }


  createServicio(datos: any){
    return this.http.post(this.url+'/api-servicio/servicios', datos);
  }   


  
}
