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
        TypeProviders: 'Auditor',
        typeDocument: 'Pasaporte',
        numberDocument: '183955032',
        status: 'Activo',
        city: 'Armenia',
        departament: 'Quindio',
      },
      {
        id: 1,
        typePerson: 'Persona Natural',
        name: 'Andres Gaviria',
        TypeProviders: 'Laboratorio',
        typeDocument: 'cc',
        numberDocument: '1239485949',
        status: 'Inactivo',
        city: 'Santa Marta',
        departament: 'Mangdalena',
      },
      {
        id: 3,
        typePerson: 'Persona Natural',
        name: 'Carlos Mario Hernandez',
        TypeProviders: 'IPS',
        typeDocument: 'Nit',
        numberDocument: '48596968585',
        status: 'Activo',
        city: 'Neiva',
        departament: 'Huila',
      },
      {
        id: 4,
        typePerson: 'Persona Natural',
        name: 'Daniela Cardona',
        TypeProviders: 'Hospital',
        typeDocument: 'Pasaporte',
        numberDocument: '183955032',
        status: 'Bloqueado',
        city: 'Barranquilla',
        departament: 'Atlantico',
      },
      {
        id: 5,
        typePerson: 'Persona Natural',
        name: 'Eliana rojas',
        TypeProviders: 'Clinica',
        typeDocument: 'Nit',
        numberDocument: '183955032',
        status: 'Inactivo',
        city: 'Dosquebradas',
        departament: 'Risaralda',
      },
      {
        id: 6,
        typePerson: 'Persona Natural',
        name: 'Gabriel Garcia',
        TypeProviders: 'IPS',
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
        TypeProviders: 'Auditor',
        typeDocument: 'Pasaporte',
        numberDocument: '746578585',
        status: 'Activo',
        city: 'Calima',
        departament: 'Valle',
      },
      {
        id: 8,
        typePerson: 'Persona Natural',
        name: 'Isabel Cristina',
        TypeProviders: 'Investigador',
        typeDocument: 'cc',
        numberDocument: '183955032',
        status: 'Bloqueado',
        city: 'Popayan',
        departament: 'Cauca',
      },
      {
        id: 9,
        typePerson: 'Persona Natural',
        name: 'Jhon Doe',
        TypeProviders: 'Hospital',
        typeDocument: 'cc',
        numberDocument: '183955032',
        status: 'Activo',
        city: 'Tunja',
        departament: 'Boyaca',
      },
      {
        id: 10,
        typePerson: 'Persona Natural',
        name: 'Karen Cardona',
        TypeProviders: 'Clinica',
        typeDocument: 'Nit',
        numberDocument: '183955032',
        status: 'Inactivo',
        city: 'Bucaramanga',
        departament: 'Santander',
      },
      {
        id: 11,
        typePerson: 'Persona Natural',
        name: 'Luisa Cardona',
        TypeProviders: 'IPS',
        typeDocument: 'cc',
        numberDocument: '183955032',
        status: 'Activo',
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 12,
        typePerson: 'Persona Natural',
        name: 'Luisa Cardona',
        TypeProviders: 'IPS',
        typeDocument: 'cc',
        numberDocument: '567888433',
        status: 'Activo',
        city: 'Pasto',
        departament: 'Nariño',
      },
      {
        id: 13,
        typePerson: 'Persona Natural',
        name: 'Maria Cardona',
        TypeProviders: 'Laboratorio',
        typeDocument: 'cc',
        numberDocument: '183955032',
        status: 'Inactivo',
        city: 'Pereira',
        departament: 'Risaralda',
      },
      {
        id: 14,
        typePerson: 'Persona Natural',
        name: 'Natalia Herrera',
        TypeProviders: 'Investigador',
        typeDocument: 'cc',
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
