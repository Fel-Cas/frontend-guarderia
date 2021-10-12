import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  //private url='https://back-pets.herokuapp.com';
  private url='http://localhost:3000';

  constructor(private http:HttpClient,private router:Router) { }

  crearPropietario(owner){
    return this.http.post(this.url+'/api-propietario/propietarios', owner);
  }

  getPropietarios(): Observable<any>{
    return this.http.get(this.url+ '/api-propietario/propietarios');
  }

  obtenerPropietario(id: string): Observable<any> {
    return this.http.get(this.url+'/api-propietario/propietarios/' + id);
  }

  eliminarPropietario(id: string): Observable<any>{
    return this.http.delete(this.url+'/api-propietario/propietarios/' + id);
  }

  actualizarPropietario(id: string, datos: any){
    return this.http.put(this.url+'/api-propietario/propietarios' + id, datos);
  }

}
