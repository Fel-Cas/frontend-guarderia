import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado/empleado';
import { EmpleadosService } from 'src/app/service/empleados/empleados.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  listEmpleados: Empleado[] = [];

  displayedColumns: string[] = ['primerNombre', 'apellido', 'email', 'telefono', 'salario', 'role', 'acciones'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true })  paginator: MatPaginator;

  constructor(private empleadoService: EmpleadosService,
              private toastr: ToastrService,
              private router:Router,
              private aRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
    this.dataSource.paginator = this.paginator;
  }

  obtenerEmpleados(){
    this.empleadoService.getEmpleados().subscribe(data => {
      console.log(data);
      this.listEmpleados = data.empleados;
      this.dataSource = new MatTableDataSource(data);
    }, error => {
      this.router.navigate(['/unauthorized']);
    })
  }

  eliminarEmpleado(id:any){
    this.empleadoService.eliminarEmpleado(id).subscribe(data => {
      this.toastr.error('El empleado fue eliminado con éxito', 'Empleado Eliminado');
      this.obtenerEmpleados();
    }, error => {
      console.log(error);
    }

    )
  }

}
