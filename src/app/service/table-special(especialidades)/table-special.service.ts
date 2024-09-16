import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableSpecialService {

  constructor() { }

  getDataTable() {
    return [
      {
        code: 111,
        name: 'Especialidad 1'
      },
      {
        code: 112,
        name: 'Especialidad 2'
      },
      {
        code: 113,
        name: 'Especialidad 3'
      },
      {
        code: 114,
        name: 'Especialidad 4'
      },
      
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }
}
