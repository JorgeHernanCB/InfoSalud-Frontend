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
        name: 'Especialidad 1'
      },
      {
        id: 2,
        code: 112,
        name: 'Especialidad 2'
      },
      {
        id: 3,
        code: 113,
        name: 'Especialidad 3'
      },
      {
        id: 4,
        code: 114,
        name: 'Especialidad 4'
      },
      
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }
}
