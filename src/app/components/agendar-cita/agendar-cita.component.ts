import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadosService } from 'src/app/service/empleados/empleados.service';
import { MascotasService } from 'src/app/service/mascotas/mascotas.service';
import { SpaService } from 'src/app/service/spa/spa.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {

  servicioForm=new FormGroup({
    estadoServicio: new FormControl(),
    novedades: new FormControl(),
    fecha: new FormControl(),
    hora: new FormControl(),
    idMascota: new FormControl(),
    idPropietario:new FormControl()
  });
  accion = 'Agendar Cita';
  idMascota: string | null;
  idPropietario: string | null;

  dateYear = new Date().getFullYear;
  dateMonth = new Date().getMonth();
  dateDay = new Date().getDate();

  estadoList: string[] = ["ASIGNADA", "EN PROGRESO", "FINALIZADA"];

  horaList: string[] = ["08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00"]



  constructor(private spaService: SpaService,
    private router:Router,
    private aRouter: ActivatedRoute,
    private mascotaService: MascotasService,
    private toastr: ToastrService) { 
      this.idMascota= this.aRouter.snapshot.paramMap.get('id');
      this.idPropietario = this.aRouter.snapshot.paramMap.get('idPropietario');
    }

    mascota: any;

  ngOnInit(): void {
  }

  agendarCita(){
    const id = parseInt(this.idMascota, 10);
    this.servicioForm.value.idMascota = id;
    this.spaService.createServicio(this.servicioForm.value).subscribe(
      data => {
        this.router.navigate(['/info-mascota/'+id]),
        this.toastr.success('La cita fue creada con éxito!', 'Cita Agendada!');
      }, error => {
        this.toastr.success(error.error.message, 'Hubo un error!');
      }
    )
  }
 

}
