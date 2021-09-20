import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado/empleado';
import { EmpleadosService } from 'src/app/service/empleados/empleados.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  listEmpleados: Empleado[] = [];

  displayedColumns: string[] = ['primerNombre', 'apellido', 'email', 'telefono', 'salario', 'role', 'acciones'];

  constructor(private empleadoService: EmpleadosService,) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.empleadoService.getEmpleados().subscribe(data => {
      console.log(data);      
      this.listEmpleados = data.empleados;
    }, error => {
      console.log(error);
    })
  }

}
