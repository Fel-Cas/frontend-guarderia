export class Empleado {
    _id?: string;
    firstName: string;
    secondName: string;
    firstlastName: string;
    secondlastName: string;
    email: string;
    birthday: Date;
    phoneNumber: string;
    salary: number;
    isActive: number;
    role: number;

    constructor(firstName: string, secondName: string, firstlastName: string, email: string, birthday: Date, phoneNumber: string, salary: number, isActive: number, role: number){
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstlastName = firstlastName;
        this.birthday = birthday;
        this.phoneNumber = phoneNumber;
        this.salary = salary;
        this.isActive = isActive;
        this.role = role;
    }
}