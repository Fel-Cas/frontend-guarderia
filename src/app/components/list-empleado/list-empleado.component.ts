import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado/empleado';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  listEmpleados: Empleado[] = [];

  displayedColumns: string[] = ['primerNombre', 'apellido', 'email', 'telefono', 'salario', 'role', 'acciones'];

  constructor(private service: AuthService,) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.service.getEmpleados().subscribe(data => {
      console.log(data);      
      this.listEmpleados = data.empleados;
    }, error => {
      console.log(error);
    })
  }

}
