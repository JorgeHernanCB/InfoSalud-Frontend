import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableFoundService {

  constructor() { }

  getDataTable() {
    return [
      {
        id: 1,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 2,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 3,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 4,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 5,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 6,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 7,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 8,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 9,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 10,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeDocument: 'cc',
        numberDocument: '183955032',
        age: 24,
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 11,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
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
