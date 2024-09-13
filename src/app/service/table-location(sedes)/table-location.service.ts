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
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Activa',
        locationMain:'Principal'
      },
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }

}
