import { Injectable } from '@angular/core';
import {
  Proveedores,
} from '../../catalogueOfActivities/models/interface/proveedores.interface';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {

 private proveedores: Proveedores[] = [];

 // TODO - Luego toca traer los datos de la base de datos - Backend

 constructor() {}

 getProveedores(): Proveedores[] {
   return this.proveedores;
 }

 addProveedores(proveedores: Proveedores): void {
   this.proveedores.push(proveedores);
 }

 getProveedoresById(id: number): Proveedores | undefined {
   return this.proveedores.find((proveedores) => proveedores.id === id);
 }

 updateProveedores(proveedores: Proveedores): void {
   const index = this.proveedores.findIndex(
     (proveedores) => proveedores.id === proveedores.id
   );
   this.proveedores[index] = proveedores;
  }

  deleteProveedoresById(id: number): void {
    this.proveedores = this.proveedores.filter(
      (proveedores) => proveedores.id !== id
    );
  }
}







// public typePerson: TypePerson[] | undefined = [
//   { typePerson: 'Persona Natural' },
//   { typePerson: 'Persona Juridica' },
// ];
// public typeDocument: TypeDocument[] | undefined = [
//   { identification: 'Cedula de Ciudadania' },
//   { identification: 'Pasaporte' },
//   { identification: 'Cedula de Extranjeria' },
//   { identification: 'NIT' },
//   { identification: 'Tarjeta de Identidad' },
// ];

// public numberIndentificationumberDocument: NumberIndentification[] | undefined = [
//   { number: '#', typeDocument: 'Cedula de Ciudadania' },
// ];

// public city: City[] | undefined = [
//   { name: 'Pereira', deparment: 'Risaralda' },
//   { name: 'Bogota', deparment: 'Cundinamarca' },
//   { name: 'Medellin', deparment: 'Antioquia' },
//   { name: 'Cali ', deparment: 'Valle' },
//   { name: 'Pasto', deparment: 'Nariño' },
//   { name: 'Bucaramanga', deparment: 'Santander' },
//   { name: 'Cartagena', deparment: 'Bolivar' },
//   { name: 'Monteria', deparment: 'Cordoba' },
//   {name : 'Manizales', deparment: 'Caldas'}
// ];
// public deparment: Deparment[] | undefined = [
//   { name: 'Risaralda', region: 'Eje Cafetero' },
//   { name: 'Cundinamarca', region: 'Centro' },
//   { name: 'Antioquia', region: 'Antioquia' },
//   { name: 'Valle', region: 'Pacifica' },
//   { name: 'Nariño', region: 'Pacifica' },
//   { name: 'Santander', region: 'Oriente' },
//   { name: 'Bolivar', region: 'Caribe' },
//   { name: 'Cordoba', region: 'Caribe' },
//   { name: 'Caldas', region: 'Eje Cafetero' },
// ];

// public estado: State[] | undefined = [
//   { condition: 'Activo'},
//   { condition: 'Inactivo'}
// ];
// public typeSuppliers: TypeSuppliers[] | undefined = [
//   { type: 'Institución Hospitalaria' },
//   { type: 'Médico Especialista' },
//   { type: 'Médico Examinador' },
//   { type: 'Médico Calificador' },
//   { type: 'Otros Especialistas de Salud' },
//   { type: 'Centro de Apoyo y Diagnóstico' },
// ];
// public specialtyByLocation: SpecialtyByLocation[] | undefined = [
//   {code: 1},
//   {name: 'San Rafael'},
//   {adress: 'cra 24 # 23-45'},
//   {active: false},
//   {headOffice: 'San Monica Hospital'},
//   {department: {name: 'Risaralda', region: 'Eje Cafetero'}},
//   {city:{name: 'Pereira'}}
// ]
