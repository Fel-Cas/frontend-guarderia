export class Propietario {
    id: string;
    firstName: string;
    secondName: string;
    firstlastName: string;
    secondlastName: string;
    email: string;
    homeAdress: string;
    userCreate: string;
    
    constructor(id: string, firstName: string, secondName: string, firstlastName: string, secondlastName: string, email: string, homeAdress: string, userCreate: string){
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstlastName = firstlastName;
        this.secondlastName = secondlastName;
        this.email = email;
        this.homeAdress = homeAdress;
        this.userCreate = userCreate;
    }
}