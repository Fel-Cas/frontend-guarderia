import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Propietario } from 'src/app/models/propietario/propietario';
import { PropietariosService } from 'src/app/service/propietarios/propietarios.service';

@Component({
  selector: 'app-list-propietario',
  templateUrl: './list-propietario.component.html',
  styleUrls: ['./list-propietario.component.css']
})
export class ListPropietarioComponent implements OnInit {

  listPropietarios: Propietario[] = [];



  constructor(private propietarioService: PropietariosService,
             private toastr: ToastrService,
             private router: Router,
             private aRouter: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.obtenerPropietarios();
  }

  obtenerPropietarios(){
    this.propietarioService.getPropietarios().subscribe(data => {
      this.listPropietarios = data.propietarios;
    }, error => {
      this.router.navigate(['/unauthorized']);
    })
  }

  eliminarPropietario(id:any){
    this.propietarioService.eliminarPropietario(id).subscribe(data => {
      this.toastr.success('El propietario fue eliminado con éxito', 'Propietario Eliminado');
      this.obtenerPropietarios
    }, error => {

    })
  }
}
