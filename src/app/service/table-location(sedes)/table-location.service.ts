import { Injectable } from '@angular/core';
import { TypeProviders } from '../../catalogueOfActivities/models/interface/proveedores.interface';

@Injectable({
  providedIn: 'root'
})
export class TableLocationService {

  constructor() { }

  getDataTable() {
    return [
      {
        id: 1,
        code: '123',
        name: 'San Juan De Dios',
        address: 'Calle 10 # 12-34',
        principalSede: 'Si',
        city:'Cali',
        departament: 'Valle del Cauca',
        activo: 'Si',
        locationMain:'Principal'
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
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }

}
