import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota/mascota';
import { MascotasService } from 'src/app/service/mascotas/mascotas.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-mascota',
  templateUrl: './list-mascota.component.html',
  styleUrls: ['./list-mascota.component.css']
})
export class ListMascotaComponent implements OnInit {

  listMascotas: Mascota[] = [];
  Error:String='';

  displayedColumns: string[] = ['Nombre', 'Raza', 'Tamaño', 'Año de Nacimiento'];


  constructor(private mascotaService: MascotasService,
    private router:Router,
    private aRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  obtenerMascotas(){
    this.mascotaService.getMascotas().subscribe(data => {
      console.log(data);
      this.listMascotas = data.mascotas;
    }, error => {
      this.router.navigate(['/unauthorized']);
    })
  }

  eliminarMascota(id:any){
    this.mascotaService.eliminarMascota(id).subscribe(data => {
      this.obtenerMascotas();
    }, error => {
      this.Error=error;
      console.log(this.Error);
    });
  }

}
