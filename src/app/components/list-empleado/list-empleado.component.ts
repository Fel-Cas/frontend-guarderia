import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado/empleado';
import { EmpleadosService } from 'src/app/service/empleados/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  listEmpleados: Empleado[] = [];


  constructor(private empleadoService: EmpleadosService,
              private toastr: ToastrService,
              private router:Router,
              private aRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.empleadoService.getEmpleados().subscribe(data => {
      this.listEmpleados = data.empleados;
    }, error => {
      this.router.navigate(['/unauthorized']);
    })
  }

  eliminarEmpleado(id:any){
    this.empleadoService.eliminarEmpleado(id).subscribe(data => {
      this.toastr.success('El empleado fue eliminado con éxito', 'Empleado Eliminado');
      this.obtenerEmpleados();
    }, error => {
    }

    )
  }

}
