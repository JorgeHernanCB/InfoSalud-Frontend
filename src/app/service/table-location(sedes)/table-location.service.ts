import { Injectable } from '@angular/core';
import { TypeProviders } from '../../catalogueOfActivities/models/interface/proveedores.interface';

@Injectable({
  providedIn: 'root',
})
export class TableLocationService {
  constructor() {}

  getDataTable() {
    return [
      {
        id: 1,
        code: '0001',
        name: 'Hospital San Juan De Dios',
        address: 'Calle 10 # 12-34',
        principalSede: 'Si',
        city: 'Cali',
        departament: 'Valle del Cauca',
        active: 'Si',
        locationMain: 'Principal',
      },
      // {
      //   id: 2,
      //   code: '123',
      //   name: 'San Juan De Dios',
      //   address: 'Calle 10 # 12-34',
      //   principalSede: 'Si',
      //   city:'Pereira',
      //   departament: 'Risaralda',
      //   activo: 'Si',
      //   locationMain:'Principal'
      // },
      // {
      //   id: 3,
      //   code: '123',
      //   name: 'San Juan De Dios',
      //   address: 'Calle 10 # 12-34',
      //   principalSede: 'No',
      //   city:'Bogota',
      //   departament: 'Cundinamarca',
      //   activo: 'No',
      //   locationMain:'Principal'
      // },
      {
        id: 2,
        code: '0002',
        name: 'Fundación Cardio Infantil',
        address: 'Calle 10 # 12-34',
        principalSede: 'Si',
        city: 'Pereira',
        departament: 'Risaralda',
        active: 'Si',
        locationMain: 'Principal',
      },
      {
        id: 3,
        code: '003',
        name: 'Fundación Santa Fe de Bogotá',
        address: 'Calle 10 # 12-34',
        principalSede: 'No',
        city: 'Bogota',
        departament: 'Cundinamarca',
        active: 'No',
        locationMain: 'Principal',
      },
    ];
  }
  getData() {
    return Promise.resolve(this.getDataTable());
  }
}
