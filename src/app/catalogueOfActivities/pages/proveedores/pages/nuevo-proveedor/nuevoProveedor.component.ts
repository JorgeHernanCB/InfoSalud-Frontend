import { Component, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {TableLocationService} from '../../../../../service/table-location(sedes)/table-location.service';
import { City, TypeDocument, TypePerson, NumberDocument, TypeProviders, Status } from '../../../../models/interface/proveedores.interface'
import { Location } from '../../../../models/interface/location.interface';




@Component({
  selector: 'infoSalud-nuevoProveedor',
  templateUrl: './nuevoProveedor.component.html',
  styleUrl: './nuevoProveedor.component.css',
})
export class NuevoProveedorComponent {


  public nuevoProveedorForm: FormGroup;
  constructor(
    private tableLocationService: TableLocationService,
    private formBuilder: FormBuilder
  ) {
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

  //Proveedores
  public cities: City[] | undefined = [];
  public typePerson: TypePerson[] | undefined = [];
  public typeDocument: TypeDocument[] = [];
  public numberDocument: NumberDocument[] = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];

  //Sedes de proveedores
  public locations!: Location[];
  SelectedLocation!: Location[] | null;





  onSubmit() {
    if (this.nuevoProveedorForm.valid) {
      console.log(this.nuevoProveedorForm.value);
    } else {
      console.log('Formulario invalido');
    }
  }

  ngOnInit(): void {

    //Screen
    this.detectScreenSize(window.innerWidth);

    this.tableLocationService.getData().then((data) => {
      this.locations = data;
    });

    //Dropdown list of status
    this.status = [
      { status: 'Activo' },
      { status: 'Inactivo' },
      { status: 'Bloqueado' },
    ];

    //Dropdown list of cities
    this.cities = [
      { city: 'Pereira', deparment: 'Risaralda' },
      { city: 'Bogota', deparment: 'Cundinamarca' },
      { city: 'Medellin', deparment: 'Antioquia' },
      { city: 'Cali ', deparment: 'Valle' },
      { city: 'Pasto', deparment: 'Nariño' },
      { city: 'Bucaramanga', deparment: 'Santander' },
      { city: 'Cartagena', deparment: 'Bolivar' },
      { city: 'Monteria', deparment: 'Cordoba' },
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

  //Responsive
  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.detectScreenSize(event.target.innerWidth);
  }

  // For responsive
  isExtraLargeScreen = false; //width: 1060px
  isLargeScreen = false //with: 900px
  isMediumScreen = false // width: 740px
  isSmallScreen = false; //width: 460px
  isExtraSmallScreen = false //width: < 460px
  
  //Function
  private detectScreenSize(width: number){
    this.isExtraLargeScreen = width > 1100;
    this.isLargeScreen = width > 850 && width <= 1100;
    this.isMediumScreen = width > 700 && width <= 850;
    this.isSmallScreen = width > 550 && width <= 700;
    this.isExtraSmallScreen = width <= 550;
  }

}
