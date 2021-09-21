import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  //private url='https://back-pets.herokuapp.com';
  private url='http://localhost:3000';

  constructor(private http:HttpClient,private router:Router) {
    
  }

  actualizarEmpleado(id: string, datos: any){
    return this.http.put(this.url+"/api-empleado/empleados/"+id, datos);
  }
  getEmpleados(): Observable<any>{
    return this.http.get(this.url+'/api-empleado/empleados');
  }
  obtenerEmpleado(id: string): Observable<any> {
    return this.http.get(this.url+ '/api-empleado/empleados/' + id);
  }
  crearEmpleado(user){
    return this.http.post(this.url+'/api-empleado/empleados',user);
  }

  eliminarEmpleado(id: string): Observable<any>{
    return this.http.delete(this.url+'/api-empleado/empleados/'+id);
  }

}
