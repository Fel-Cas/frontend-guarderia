export class Mascota {
    _id?: string;
    namePet: string;
    breed: string;
    size: string;
    birthYear: number;
    planDeVacunacion: string;
    cuidados: string;
    isActive: number;

    constructor(namePet: string, breed: string, size: string, birthYear: number, planDeVacunacion: string, cuidados: string, isActive: number){
        this.namePet = namePet;
        this.breed = breed;
        this.size = size;
        this.birthYear = birthYear;
        this.planDeVacunacion = planDeVacunacion;
        this.cuidados = cuidados;
        this.isActive = isActive;
    }
}