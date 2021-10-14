export class Spa {
    estadoServicio: string;
    novedades: string;
    fecha: Date;
    hora: string;
    idMascota: number;
    idPropietario: string;

    constructor(estadoServicio: string, novedades: string, fecha: Date, hora: string, idMascota: number, idPropietario: string) {
        this.estadoServicio = estadoServicio;
        this.novedades = novedades;
        this.fecha = fecha;
        this.hora = hora;
        this.idMascota = idMascota;
        this.idPropietario = idPropietario;
    }

}