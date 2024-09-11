import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableFoundService {

  constructor() { }

  getDataTable() {
    return [
      {
        id: 2,
        typePerson: 'Persona Natural',
        name: 'Belli alish',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Armenia',
        departament: 'Quindio',
      },
      {
        id: 1,
        typePerson: 'Persona Natural',
        name: 'Andres Gaviria',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Santa Marta',
        departament: 'Mangdalena',
      },
      {
        id: 3,
        typePerson: 'Persona Natural',
        name: 'Carlos Mario Hernandez',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Neiva',
        departament: 'Huila',
      },
      {
        id: 4,
        typePerson: 'Persona Natural',
        name: 'Daniela Cardona',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Barranquilla',
        departament: 'Atlantico',
      },
      {
        id: 5,
        typePerson: 'Persona Natural',
        name: 'Eliana rojas',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Dosquebradas',
        departament: 'Risaralda',
      },
      {
        id: 6,
        typePerson: 'Persona Natural',
        name: 'Gabriel Garcia',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Manizales',
        departament: 'Caldas',
      },
      {
        id: 7,
        typePerson: 'Persona Natural',
        name: 'Hernan Dario',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Calima',
        departament: 'Valle',
      },
      {
        id: 8,
        typePerson: 'Persona Natural',
        name: 'Isabel Cristina',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Popayan',
        departament: 'Cauca',
      },
      {
        id: 9,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Tunja',
        departament: 'Boyaca',
      },
      {
        id: 10,
        typePerson: 'Persona Natural',
        name: 'Karen Cardona',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Bucaramanga',
        departament: 'Santander',
      },
      {
        id: 11,
        typePerson: 'Persona Natural',
        name: 'Luisa Cardona',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 12,
        typePerson: 'Persona Natural',
        name: 'Luisa Cardona',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 13,
        typePerson: 'Persona Natural',
        name: 'Maria Cardona',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 14,
        typePerson: 'Persona Natural',
        name: 'Natalia Herrera',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      }
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }

}
