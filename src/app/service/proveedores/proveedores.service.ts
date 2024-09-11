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
