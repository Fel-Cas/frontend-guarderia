import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota/mascota';
import { MascotasService } from 'src/app/service/mascotas/mascotas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-mascota',
  templateUrl: './list-mascota.component.html',
  styleUrls: ['./list-mascota.component.css']
})
export class ListMascotaComponent implements OnInit {

  listMascotas: Mascota[] = [];
  Error:String='';


  constructor(private mascotaService: MascotasService,
    private router:Router,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  obtenerMascotas(){
    this.mascotaService.getMascotas().subscribe(data => {
      this.listMascotas = data.mascotas;
    }, error => {
      this.router.navigate(['/unauthorized']);
    })
  }

  eliminarMascota(id:any){
    this.mascotaService.eliminarMascota(id).subscribe(data => {      
      this.toastr.success('La mascota fue eliminada con éxito', 'Mascota Eliminada');
      this.obtenerMascotas();
    }, error => {
      this.Error=error;
    });
  }

}
