import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Spa } from 'src/app/models/Spa/spa';
import { SpaService } from 'src/app/service/spa/spa.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {


  listCitas: Spa[] = [];

  constructor(private spaService: SpaService,
    private toastr: ToastrService,
    private router:Router,
    private aRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(){    
    this.spaService.obtenerServicios().subscribe(
      data => {
        this.listCitas = data.finalServices;
      }, error => {        
        this.router.navigate(['/unauthorized']);
      }
    )
  }

  desactivarServicio(id:any){
    this.spaService.desactivarServicios(id).subscribe(
      data => {
        this.toastr.success('La cita fue eliminada con éxito!', 'Cita Eliminada!');
        this.obtenerServicios();
      }, error => {
      }
    )
  }
  
  

}
