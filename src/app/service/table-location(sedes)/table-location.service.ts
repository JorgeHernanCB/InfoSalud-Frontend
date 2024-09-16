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
        name: 'San Juan De Dios',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'No',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Si',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'San Juan De Dios',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'Si',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Si',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'Si',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'No',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'San Juan De Dios',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'Si',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'No',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'San Juan De Dios',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'Si',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'No',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'rosales',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'Si',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'No',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'Si',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Si',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'Si',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'No',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'Sede Principal - San Juan De Dios',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'Si',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'Si',
        locationMain:'Principal'
      },
      {
        id: 2,
        code: '123',
        name: 'San Jorge',
        address: 'Calle 10 # 12-34',
        sedePrincipal: 'No',
        city:'Pereira',
        departament: 'Risaralda',
        active: 'No',
        locationMain:'Principal'
      },
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }

}
