import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Mascota } from 'src/app/models/mascota/mascota';
import { MascotasService } from 'src/app/service/mascotas/mascotas.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-info-mascota',
  templateUrl: './info-mascota.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./info-mascota.component.css']
})
export class InfoMascotaComponent implements OnInit {
  mascotaForm=new FormGroup({
    idPropietario: new FormControl(),
    name: new FormControl(),
    breed: new FormControl(),
    size: new FormControl(),
    birthyear: new FormControl(),
    planDeVacunacion:new FormControl(),
    cuidados: new FormControl()
  });
  mascota: any;
  id: string | null;
  idPropietario: string | null;
  datos: any = {};

  constructor(private mascotaService: MascotasService,
    private router:Router,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService,
    public modal: NgbModal) {
      this.id= this.aRouter.snapshot.paramMap.get('id');
      this.idPropietario = this.aRouter.snapshot.paramMap.get('idPropietario');
  }

  ngOnInit(): void {
    this.obtenerMascota();
  }

  obtenerMascota(){
    this.mascotaService.obtenerMascota(this.id).subscribe(
      data => {
        this.mascota = data.mascota;
        console.log(this.mascota.propietarios)
      }
    );

  }

  agregarPropietario(){
    this.mascotaService.createMascotaPropietario(this.id, this.mascotaForm.value).subscribe(
      res => {
        this.toastr.success('El propietario fue asignado con éxito!', 'Propietario Asignado!');
        this.obtenerMascota();
      }, error => {
        this.toastr.error(error.error.message, 'Hubo un error');
        console.log(error);
      }
    )
  }

  eliminarPropietario(idPropietario){
    this.datos.idPropietario = idPropietario;
    console.log(this.datos);
    this.mascotaService.borrarMascotaPropietario(this.id,idPropietario).subscribe(
      res=>{
        this.toastr.success('El propietario fue eliminado con éxito!', 'Propietario Eliminado!');
        this.obtenerMascota();
      }, error =>{
        console.log(error);
        console.log(this.datos.idPropietario);
      }
    )
  }



}
