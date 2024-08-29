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
        city: 'Periera',
        typeDocument: 'cc',
        numberDocument: '183955032',
        departament: 'Risaralda',
        name: 'Jhon Doe',
        age: 24,
      }
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }

}
