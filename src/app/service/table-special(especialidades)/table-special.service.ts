import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableSpecialService {

  constructor() { }

  getDataTable() {
    return [
      {
        id: 1,
        code: 111,
        name: 'Ambulancia'
      },
      {
        id: 2,
        code: 112,
        name: 'Centro de cirugia ambulatoria'
      },
      {
        id: 3,
        code: 113,
        name: 'Anestesia'
      },
      {
        id: 4,
        code: 114,
        name: 'Cardiologia'
      },
      {
        id: 5,
        code: 115,
        name: 'Servicios de quiropráctico'
      },
      {
        id: 6,
        code: 116,
        name: 'Laboratorio Clinico'
      },
      
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }
}
