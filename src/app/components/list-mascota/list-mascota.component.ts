import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota/mascota';
import { MascotasService } from 'src/app/service/mascotas/mascotas.service';

@Component({
  selector: 'app-list-mascota',
  templateUrl: './list-mascota.component.html',
  styleUrls: ['./list-mascota.component.css']
})
export class ListMascotaComponent implements OnInit {

  listMascotas: Mascota[] = [];

  displayedColumns: string[] = ['Nombre', 'Raza', 'Tamaño', 'Año de Nacimiento'];


  constructor(private mascotaService: MascotasService) { }

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  obtenerMascotas(){
    this.mascotaService.getMascotas().subscribe(data => {
      console.log(data);      
      this.listMascotas = data.mascotas;
    }, error => {
      console.log(error);
    })
  }

}
