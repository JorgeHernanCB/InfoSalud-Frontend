import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableServicesService {

  constructor() { }

  getDataTable() {
    return [
      {
        id: 1,
        code: 111,
        name: 'EPS',
        departament: 'Risaralda',
        city: 'Pereira'

      },
      {
        id: 2,
        code: 113,
        name: 'Salud',
        departament: 'Cundinamarca',
        city: 'Bogota'
      },
      {
        id: 3,
        code: 113,
        name: 'Medicamentos',
        departament: 'Cundinamarca',
        city: 'Bogota'
      },
      {
        id: 4,
        code: 164,
        name: 'SOAT',
        departament: 'Valle del Cauca',
        city: 'Cali'
      },
      
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }
}
