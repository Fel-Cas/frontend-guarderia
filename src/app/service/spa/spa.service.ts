import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaService {
  private url='https://back-pets.herokuapp.com';
  //private url='http://localhost:3000';



  constructor(private http:HttpClient,
              private router:Router) { }


  createServicio(datos: any){
    return this.http.post(this.url+'/api-servicio/servicios', datos);
  }   

  obtenerServicios(): Observable<any> {
    return this.http.get(this.url + '/api-servicio/servicios');
  }

  desactivarServicios(id: string): Observable<any> {
    return this.http.put(this.url + '/api-servicio/desactivar-servicio/' + id, {});
  } 

  actualizarServicio(id: string, datos: any){
    return this.http.put(this.url+'/api-servicio/servicio/' + id, datos);
  }

  obtenerServicio(id: string){
    return this.http.get(this.url+'/api-servicio/servicios/' + id);
  }
  
}
