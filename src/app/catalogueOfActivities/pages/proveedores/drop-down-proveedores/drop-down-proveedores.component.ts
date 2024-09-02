import { Component } from '@angular/core';
import { TypePerson, City, Deparment, TypeDocument, NumberIndentification } from '../../../models/interface/proveedores.interface';

@Component({
  selector: 'infoSalud-drop-down-proveedores',
  templateUrl: './drop-down-proveedores.component.html',
  styleUrl: './drop-down-proveedores.component.css'
})
export class DropDownProveedoresComponent {

  public typePerson: TypePerson[] | undefined= [];
 //public selectedTypePerson: TypePerson | undefined;

  public cities: City[] | undefined = [];
 // public selectedCity: City | undefined;

  public deparments: Deparment[] | undefined = [];
 // public selectedDeparment: Deparment | undefined;

  public typeDocument: TypeDocument[] | undefined = [];
  //public selectedTypeDocument: TypeDocument | undefined;

  public numberIndentification: NumberIndentification[] | undefined = [];
  //public selectedNumberDocument: numberDocument | undefined;

  ngOnInit () {
    //Dropdown list of type person
    this.typePerson = [
      { typePerson: 'Persona Natural'},
      { typePerson: 'Persona Juridica'}
    ];
    //Dropdown list of cities
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
    this.deparments = [
      { name: 'Risaralda', region: 'Eje Cafetero' },
      { name: 'Cundinamarca', region: 'Centro' },
      { name: 'Antioquia', region: 'Antioquia' },
      { name: 'Valle', region: 'Pacifica' },
      { name: 'Nariño', region: 'Pacifica' },
      { name: 'Santander', region: 'Oriente' },
      { name: 'Bolivar', region: 'Caribe' },
      { name: 'Cordoba', region: 'Caribe' }
    ]
    this.typeDocument = [
      { identification: 'Cedula de Ciudadania'},
      { identification: 'Pasaporte'},
      { identification: 'Cedula de Extranjeria'},
      { identification: 'NIT'},
      { identification: 'Tarjeta de Identidad'}
    ]
    this.numberIndentification =[
      { number: '#', typeDocument: 'Cedula de Ciudadania'},

    ]
  }



}
