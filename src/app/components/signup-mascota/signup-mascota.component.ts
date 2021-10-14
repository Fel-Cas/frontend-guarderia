import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MascotasService } from 'src/app/service/mascotas/mascotas.service';

@Component({
  selector: 'app-signup-mascota',
  templateUrl: './signup-mascota.component.html',
  styleUrls: ['./signup-mascota.component.css']
})
export class SignupMascotaComponent implements OnInit {
  mascotaForm=new FormGroup({
    idPropietario: new FormControl(),
    name: new FormControl(),
    breed: new FormControl(),
    size: new FormControl(),
    birthyear: new FormControl(),
    planDeVacunacion:new FormControl(),
    cuidados: new FormControl()
  });
  accion = 'Registrar Mascota';
  id: string | null;

  constructor(private router:Router,
    private aRouter: ActivatedRoute,
    private mascotaService: MascotasService,
    private toastr: ToastrService) {
      this.id= this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  signUp(){
    const año = parseInt(this.mascotaForm.value.birthYear, 10);
    if(this.id !== null){
      this.mascotaService.actualizarMascota(this.id, this.mascotaForm.value).subscribe(
        res => {
          this.toastr.success('La información de la mascota fue actualizada con exito!', 'Mascota Actualizada!');
          this.router.navigate(['/list-mascota']);
        },
        err => {
          this.toastr.error(err.error.message, 'Hubo un error!');
        }
      )
    } else {
      this.mascotaService.crearMascota(this.mascotaForm.value).subscribe(        
        res=>{
          this.toastr.success('La mascota fue registrada con exito!', 'Mascota Registrada!');
          this.router.navigate(['/list-mascota']);
        },
        err=>{
          this.toastr.error(err.error.message, 'Hubo un error!');
        },
        
      )
    }
  }


  esEditar() {
    if(this.id !== null) {
      this.accion = 'Editar Mascota';
      this.mascotaService.obtenerMascota(this.id).subscribe(data => {
        this.mascotaForm.setValue({
          idPropietario: data.mascota.idPropietario,
          name: data.mascota.name,
          breed: data.mascota.breed,
          size: data.mascota.size,
          birthyear: data.mascota.birthyear,
          planDeVacunacion: data.mascota.planDeVacunacion,
          cuidados: data.mascota.cuidados
        })
      })
    }
  }

}
