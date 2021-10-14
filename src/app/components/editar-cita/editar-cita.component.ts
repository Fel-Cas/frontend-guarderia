import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MascotasService } from 'src/app/service/mascotas/mascotas.service';
import { SpaService } from 'src/app/service/spa/spa.service';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})
export class EditarCitaComponent implements OnInit {

  servicioForm=new FormGroup({
    estadoServicio: new FormControl(),
    novedades: new FormControl(),
    fecha: new FormControl(),
    hora: new FormControl(),
    idMascota: new FormControl(),
    idPropietario:new FormControl()
  });

  id: string | null;
  idMascota: string | null;

  estadoList: string[] = ["ASIGNADA", "EN PROGRESO", "FINALIZADA"];

  horaList: string[] = ["08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00"]


  constructor(private spaService: SpaService,
    private router:Router,
    private aRouter: ActivatedRoute,
    private mascotaService: MascotasService,
    private toastr: ToastrService) {
      this.id = this.aRouter.snapshot.paramMap.get('id');
      this.idMascota = this.aRouter.snapshot.paramMap.get('idMascota')
  }

  ngOnInit(): void {
    this.asignarValores();
  }

  actualizarServicio(){
    const id = parseInt(this.servicioForm.value.idMascota, 10);
    this.servicioForm.value.idMascota = id;
    this.spaService.actualizarServicio(this.id, this.servicioForm.value).subscribe( data => {
      this.toastr.success('La cita fue actualizada con éxito!', 'Cita Actualizada!');
      this.router.navigate(['/citas']);
    }, error => {
    })
    
  }

  asignarValores(){
    if(this.id !== null){
      this.spaService.obtenerServicio(this.id).subscribe(data => {
        this.servicioForm.setValue({
          estadoServicio: data['servicio'].estadoServicio,
          novedades: data['servicio'].novedades,
          fecha: data['servicio'].fecha,
          hora: data['servicio'].hora,
          idMascota: data['servicio'].idMascota,
          idPropietario: data['servicio'].idPropietario          
      })
      }, error => {

      })
    }
  }

}
