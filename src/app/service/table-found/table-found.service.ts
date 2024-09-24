import { Injectable } from '@angular/core';
import { TypeProviders } from '../../catalogueOfActivities/models/interface/proveedores.interface';

@Injectable({
  providedIn: 'root'
})
export class TableFoundService {

  constructor() { }

  getDataTable() {
    return [
      {
        id: 2,
        typePerson: 'Persona Juridica',
        name: 'Carlos Mario Hernandez',
        typeProviders: 'Auditor',
        typeDocument: 'C.C',
        numberDocument: '183955032',
        status: 'Activo',
        city: 'Armenia',
        departament: 'Quindio',
        special: ''
      },
      {
        id: 1,
        typePerson: 'Persona Natural',
        name: 'Andres Felipe Arango',
        typeProviders: 'Laboratorio',
        typeDocument: 'DNI',
        numberDocument: '1239485949',
        status: 'Inactivo',
        city: 'Santa Marta',
        departament: 'Mangdalena',
        special: ''
      },
      {
        id: 3,
        typePerson: 'Persona Natural',
        name: 'Cristian Cardona',
        typeProviders: 'IPS',
        typeDocument: 'NIT',
        numberDocument: '48596968585',
        status: 'Activo',
        city: 'Neiva',
        departament: 'Huila',
        special: ''
      },
      {
        id: 4,
        typePerson: 'Persona Natural',
        name: 'Daniela Cardona',
        typeProviders: 'Hospital',
        typeDocument: 'DNI',
        numberDocument: '183955032',
        status: 'Bloqueado',
        city: 'Barranquilla',
        departament: 'Atlantico',
        special: ''
      },
      {
        id: 5,
        typePerson: 'Persona Juridica',
        name: 'Eliana rojas',
        typeProviders: 'Clinica',
        typeDocument: 'C.C',
        numberDocument: '183955032',
        status: 'Inactivo',
        city: 'Dosquebradas',
        departament: 'Risaralda',
        special: ''
      },
      {
        id: 6,
        typePerson: 'Persona Natural',
        name: 'Gabriel Garcia',
        typeProviders: 'IPS',
        typeDocument: 'DNI',
        numberDocument: '183955032',
        status: 'Activo',
        city: 'Manizales',
        departament: 'Caldas',
        special: ''
      },
      {
        id: 7,
        typePerson: 'Persona Natural',
        name: 'Hernan Dario',
        typeProviders: 'Auditor',
        typeDocument: 'C.C',
        numberDocument: '746578585',
        status: 'Activo',
        city: 'Calima',
        departament: 'Valle',
        special: ''
      },
      {
        id: 8,
        typePerson: 'Persona Natural',
        name: 'Isabel Cristina',
        typeProviders: 'Investigador',
        typeDocument: 'DNI',
        numberDocument: '183955032',
        status: 'Bloqueado',
        city: 'Popayan',
        departament: 'Cauca',
        special: ''
      },
      {
        id: 9,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        typeProviders: 'Hospital',
        typeDocument: 'DNI',
        numberDocument: '183955032',
        status: 'Activo',
        city: 'Tunja',
        departament: 'Boyaca',
        special: ''
      },
      {
        id: 10,
        typePerson: 'Persona Natural',
        name: 'Karen Cardona',
        typeProviders: 'Clinica',
        typeDocument: 'NIT',
        numberDocument: '183955032',
        status: 'Inactivo',
        city: 'Bucaramanga',
        departament: 'Santander',
        special: ''
      },
      {
        id: 11,
        typePerson: 'Persona Natural',
        name: 'Luisa Cardona',
        typeProviders: 'IPS',
        typeDocument: 'NIT',
        numberDocument: '183955032',
        status: 'Activo',
        city: 'Pereira',
        departament: 'Risaralda',
        special: ''
      },
      {
        id: 12,
        typePerson: 'Persona Natural',
        name: 'Luisa Cardona',
        typeProviders: 'IPS',
        typeDocument: 'C.C',
        numberDocument: '567888433',
        status: 'Activo',
        city: 'Pasto',
        departament: 'Nariño',
        special: ''
      },
      {
        id: 13,
        typePerson: 'Persona Juriica',
        name: 'Maria Cardona',
        typeProviders: 'Laboratorio',
        typeDocument: 'DNI',
        numberDocument: '183955032',
        status: 'Inactivo',
        city: 'Pereira',
        departament: 'Risaralda',
        special: ''
      },
      {
        id: 14,
        typePerson: 'Persona Natural',
        name: 'Natalia Herrera',
        typeProviders: 'Investigador',
        typeDocument: 'NIT',
        numberDocument: '183955032',
        status: 'Activo',
        city: 'Pereira',
        departament: 'Risaralda',
        special: ''
      }
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }

}
