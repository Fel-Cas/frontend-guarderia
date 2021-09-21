import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private url='https://back-pets.herokuapp.com';
  //private url='http://localhost:3000';

  constructor(private http:HttpClient,private router:Router) { }

  actualizarMascota(id: string, datos:any){
    return this.http.put(this.url+"/api-mascota/mascotas/"+id, datos);
  }

  crearMascota(mascota){
    return this.http.post(this.url+'/api-mascota/mascotas', mascota);
  }

  obtenerMascota(id: any): Observable<any> {
    return this.http.get(this.url+ '/api-mascota/mascotas/' + id);
  }

  getMascotas(): Observable<any>{
    return this.http.get(this.url+'/api-mascota/mascotas');
  }
  eliminarMascota(id:any):Observable<any>{
    return this.http.delete(this.url+ '/api-mascota/mascotas/' + id);
  }
}
