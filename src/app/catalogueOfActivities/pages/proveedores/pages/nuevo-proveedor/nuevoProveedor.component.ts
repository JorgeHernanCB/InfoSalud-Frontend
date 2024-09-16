import { Component, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {TableLocationService} from '../../../../../service/table-location(sedes)/table-location.service';
import {TableSpecialService} from '../../../../../service/table-special(especialidades)/table-special.service';
import { City, TypeDocument, TypePerson, NumberDocument, TypeProviders, Status, Active, PrincipalSede, Departament, Special } from '../../../../models/interface/proveedores.interface'
import { Location } from '../../../../models/interface/location.interface';




@Component({
  selector: 'infoSalud-nuevoProveedor',
  templateUrl: './nuevoProveedor.component.html',
  styleUrl: './nuevoProveedor.component.css',
})
export class NuevoProveedorComponent {

  displaySearchDialog: boolean = false;
  searchTerm: string = '';


  public nuevoProveedorForm: FormGroup;
  constructor(
    private tableLocationService: TableLocationService,
    private tableSpecialService: TableSpecialService,
    private formBuilder: FormBuilder
  ) {
    this.nuevoProveedorForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      code: ['', Validators.required],
      address: ['', Validators.required],
      typeDocument: ['', Validators.required],
      typePerson: ['', Validators.required],
      typeProviders: ['', Validators.required],
      numberDocument: ['', Validators.required],
      status: [{value:'', disabled: true}, Validators.required],
      city: ['', Validators.required],
      selectPlaces: ['', Validators.required],
      active: ['', Validators.required],
      sedePrincipal: ['', Validators.required],

    });
  }

  //Proveedores
  public cities: City[] | undefined = [];
  public typePerson: TypePerson[] | undefined = [];
  public typeDocument: TypeDocument[] = [];
  public numberDocument: NumberDocument[] = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];
  public active: Active[] | undefined = [];
  public sedePrincipal: PrincipalSede[] | undefined = [];
  public departaments: Departament[] | undefined = [];

  //Sedes de proveedores
  public locations!: Location[];
  SelectedLocation!: Location[] | null;

  //Especialidades
  public specials!: Special[];
  SelectedSpecial!: Special[] | null;

  //Table de sedes
  showTable: boolean = false;


  onSubmit() {
    if (this.nuevoProveedorForm.valid) {
      console.log(this.nuevoProveedorForm.value);
    } else {
      console.log('Formulario invalido');
    }
  }

  ngOnInit(): void {

    this.tableLocationService.getData().then((data) => {
      this.locations = data.map((item: any) => ({
        ...item,
        active: item.active === 'true' || item.active === 'true' || item.active === '1' ? true : false
      }));

    });

    this.tableSpecialService.getData().then((data) => {
      this.specials = data.map((item: any) => ({
        ...item,
        active: item.active === 'true' || item.active === 'true' || item.active === '1' ? true : false
      }));
    })


    //Dropdown list of status
    this.status = [
      { status: 'Activo' },
      { status: 'Inactivo' },
      { status: 'Bloqueado' },
    ];

    this.departaments = [
      { name: 'Risaralda', region: 'Eje Cafetero' },
      { name: 'Cundinamarca', region: 'Centro' },
      { name: 'Antioquia', region: 'Antioquia' },
      { name: 'Valle', region: 'Pacifica' },
      { name: 'Nariño', region: 'Pacifica' },
      { name: 'Santander', region: 'Oriente' },
      { name: 'Bolivar', region: 'Caribe' },
      { name: 'Cordoba', region: 'Caribe' },
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
    ];

    this.active = [
      { name: 'Si' },
      { name: 'No' },
    ];

    this.sedePrincipal = [
      { name: 'Si'},
      { name: 'No'},
    ];
  }

  showNumberDocumentDialog(){
    this.displaySearchDialog = true;
  }

}
