import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { City, TypeDocument, TypePerson, NumberDocument, TypeProviders, Status } from '../../../../models/interface/proveedores.interface'

@Component({
  selector: 'infoSalud-nuevoProveedor',
  templateUrl: './nuevoProveedor.component.html',
  styleUrl: './nuevoProveedor.component.css',
})
export class NuevoProveedorComponent {

  public cities: City[] | undefined = [];
  public typePerson: TypePerson[] | undefined = [];
  public typeDocument: TypeDocument[] = [];
  public numberDocument: NumberDocument[] = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];


  public nuevoProveedorForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.nuevoProveedorForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      typeDocument: ['', Validators.required],
      typePerson: ['', Validators.required],
      typeProviders: ['', Validators.required],
      numberDocument: ['', Validators.required],
      status: ['', Validators.required],
      city: ['', Validators.required],
      selectPlaces: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.nuevoProveedorForm.valid) {
      console.log(this.nuevoProveedorForm.value);
    } else {
      console.log('Formulario invalido');
    }
  }

  ngOnInit(): void {
    //Dropdown list of status
    this.status = [
      { name: 'Activo' },
      { name: 'Inactivo' },
      { name: 'Bloqueado' },
    ];

    //Dropdown list of cities
    this.cities = [
      { name: 'Pereira', deparment: 'Risaralda' },
      { name: 'Bogota', deparment: 'Cundinamarca' },
      { name: 'Medellin', deparment: 'Antioquia' },
      { name: 'Cali ', deparment: 'Valle' },
      { name: 'Pasto', deparment: 'Nariño' },
      { name: 'Bucaramanga', deparment: 'Santander' },
      { name: 'Cartagena', deparment: 'Bolivar' },
      { name: 'Monteria', deparment: 'Cordoba' },
    ];

    //Dropdown list of typeDocument
    this.typeDocument = [
      { identification: 'Cedula de Ciudadania' },
      { identification: 'Pasaporte' },
      { identification: 'Cedula de Extranjeria' },
      { identification: 'NIT' },
      { identification: 'Tarjeta de Identidad' },
    ];
    //Dropdown typePerson
    this.typePerson = [
      { typePerson: 'Persona Natural' },
      { typePerson: 'Persona Juridica' },
    ];

    //Dropdown numeberDocument
    this.numberDocument = [
      { number: '#', typeDocument: 'Cedula de Ciudadania' },
    ];

    //Dropdown typeProviders
    this.typeProviders = [
      { name: 'Auditor'},
      { name: 'Investigador'},
      { name: 'Laboratorio'},
      { name: 'IPS'},
      { name: 'Clinica' },
      { name: 'Hospital' },
    ]
  }
}
