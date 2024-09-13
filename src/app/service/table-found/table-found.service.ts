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
        typePerson: 'Persona Natural',
        name: 'Belli alish',
        typeProviders: 'Auditor',
        typeDocument: 'Cedula de ciudadnia',
        numberDocument: '183955032',
        status: 'Activo',
        city: 'Armenia',
        departament: 'Quindio',
      },
      {
        id: 1,
        typePerson: 'Persona Natural',
        name: 'Andres Gaviria',
        typeProviders: 'Laboratorio',
        typeDocument: 'DNI',
        numberDocument: '1239485949',
        status: 'Inactivo',
        city: 'Santa Marta',
        departament: 'Mangdalena',
      },
      {
        id: 3,
        typePerson: 'Persona Natural',
        name: 'Carlos Mario Hernandez',
        typeProviders: 'IPS',
        typeDocument: 'NIT',
        numberDocument: '48596968585',
        status: 'Activo',
        city: 'Neiva',
        departament: 'Huila',
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
      },
      {
        id: 5,
        typePerson: 'Persona Natural',
        name: 'Eliana rojas',
        typeProviders: 'Clinica',
        typeDocument: 'Cedula de ciudadania',
        numberDocument: '183955032',
        status: 'Inactivo',
        city: 'Dosquebradas',
        departament: 'Risaralda',
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
      },
      {
        id: 7,
        typePerson: 'Persona Natural',
        name: 'Hernan Dario',
        typeProviders: 'Auditor',
        typeDocument: 'Cedula de ciudadania',
        numberDocument: '746578585',
        status: 'Activo',
        city: 'Calima',
        departament: 'Valle',
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
      },
      {
        id: 12,
        typePerson: 'Persona Natural',
        name: 'Luisa Cardona',
        typeProviders: 'IPS',
        typeDocument: 'Cedula de ciudadania',
        numberDocument: '567888433',
        status: 'Activo',
        city: 'Pasto',
        departament: 'Nariño',
      },
      {
        id: 13,
        typePerson: 'Persona Natural',
        name: 'Maria Cardona',
        typeProviders: 'Laboratorio',
        typeDocument: 'DNI',
        numberDocument: '183955032',
        status: 'Inactivo',
        city: 'Pereira',
        departament: 'Risaralda',
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
      }
    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }

}
