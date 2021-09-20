import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadosService } from 'src/app/service/empleados/empleados.service';
import { MascotasService } from 'src/app/service/mascotas/mascotas.service';

@Component({
  selector: 'app-signup-mascota',
  templateUrl: './signup-mascota.component.html',
  styleUrls: ['./signup-mascota.component.css']
})
export class SignupMascotaComponent implements OnInit {
  mascotaForm=new FormGroup({
    id: new FormControl(),
    namePet: new FormControl(),
    breed: new FormControl(),
    size: new FormControl(),
    birthYear: new FormControl(),
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
        data => {
          console.log(data)
        },
        err => {
          console.log(err);
        }
      )
    } else {
      this.mascotaService.crearMascota(this.mascotaForm.value).subscribe(
        res=>{
          this.toastr.success('La mascota fue registrada con exito!', 'Mascota Registrada!');
          this.router.navigate(['/list-empleado']);
        },
        err=>{
          console.log(err);
        }
      )
    }    
  }


  esEditar() {
    if(this.id !== null) {
      this.accion = 'Editar Mascota';
      this.mascotaService.obtenerMascota(this.id).subscribe(data => {        
        console.log(data.empleado.id);
        this.mascotaForm.setValue({          
          id: data.empleado.id,
          firstName: data.empleado.firstName,
          secondName: data.empleado.secondName,
          firstlastName: data.empleado.firstlastName,
          secondlastName: data.empleado.secondlastName,
          email: data.empleado.email,
          salary: data.empleado.salary,
          birthday: data.empleado.birthday,
          phoneNumber: data.empleado.phoneNumber,
          role: data.empleado.role
        })
      })
    }
  }

}
