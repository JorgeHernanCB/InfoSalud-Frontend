import { Component } from '@angular/core';
import { TypePerson, City } from '../../interface/proveedores.interface';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})

export class ProveedoresComponent {

  public typePerson: TypePerson[] | undefined= [];
  public selectedTypePerson: TypePerson | undefined;

  public cities: City[] | undefined = [];
  public selectedCity: City | undefined;


  ngOnInit () {
    this.typePerson = [
      { naturalPerson: 'Persona Natural', legalPerson: 'Persona Jurídica' },
    ];
    this.cities = [
      { name:'Pereira', deparment: 'Risaralda' },
      { name:'Bogota', deparment: 'Cundinamarca' },
      { name:'Medellin', deparment: 'Antioquia' },
      { name:'Cali ', deparment: 'Valle' },
      { name:'Pasto', deparment: 'Nariño' },
      { name:'Bucaramanga', deparment: 'Santander'},
      { name:'Cartagena', deparment: 'Bolivar' },
      { name:'Monteria', deparment: 'Cordoba' }
    ];
  }
}


