import { Component, OnInit, ViewChild } from '@angular/core';
import { TableFoundService } from './../../../service/table-found/table-found.service';
import { proveedores } from '../../models/interface/dBproveedores.interface';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import {
  TypePerson,
  City,
  Deparment,
  TypeDocument,
  NumberDocument,
  TypeProviders,
  Status
} from '../../models/interface/proveedores.interface';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

//Components

@Component({
  selector: 'infoSalud-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css',
})

export class ProveedoresComponent implements OnInit {
  public proveedorsForm = new FormGroup({
    id: new FormControl<string>(''),
    name: new FormControl<string>('', { nonNullable: true }),
    code: new FormControl<string>(''),
    typePerson: new FormControl<string>(''),
    typeDocument: new FormControl<string>(''),
    numberDocument: new FormControl<string>(''),
    city: new FormControl<string>(''),
    deparment: new FormControl<string>(''),
    state: new FormControl<string>(''),
    typeSuppliers: new FormControl<string>(''),
    specialtyByLocation: new FormControl<string>(''),
    companyName: new FormControl<string>(''),
    businessReason: new FormControl<string>(''),
    date_start: new FormControl<string>(''),
    date_finish: new FormControl<string>(''),
  });

  value: string | undefined;

  proveedores!: proveedores[];

  // Manejo de la tabla para eliminar y editar
  proveedorDialog: boolean = false;
  proveedor!: proveedores;
  SelectedProveedor!: proveedores[] | null;
  submitted: boolean = false;
  statuses!: any[];
  viewDialog: boolean = false;

  @ViewChild('dt1') dt1!: Table;

  //Dropdowns
  public typePerson: TypePerson[] | undefined = [];
  public cities: City[] | undefined = [];
  public deparments: Deparment[] | undefined = [];
  public typeDocument: TypeDocument[] | undefined = [];
  public numberDocument: NumberDocument[] | undefined = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];
  //public selectedNumberDocument: numberDocument | undefined;

  constructor(
    private fb: FormBuilder,
    private tableFoundService: TableFoundService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    // this.proveedorsForm = this.fb.group({
    //   //Se definen los valores del formulario
    //   name: ['',Validators.required],
    //   code: ['', Validators.required]
    // });
  }

  ngOnInit(): void {
    this.tableFoundService.getData().then((data) => {
      this.proveedores = data;
    });

    this.typePerson = [
      { typePerson: 'Persona Natural' },
      { typePerson: 'Persona Juridica' },
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
    this.deparments = [
      { name: 'Risaralda', region: 'Eje Cafetero' },
      { name: 'Cundinamarca', region: 'Centro' },
      { name: 'Antioquia', region: 'Antioquia' },
      { name: 'Valle', region: 'Pacifica' },
      { name: 'Nariño', region: 'Pacifica' },
      { name: 'Santander', region: 'Oriente' },
      { name: 'Bolivar', region: 'Caribe' },
      { name: 'Cordoba', region: 'Caribe' },
    ];
    this.typeDocument = [
      { identification: 'Cedula de Ciudadania' },
      { identification: 'NIT' },
      { identification: 'DNI' },
    ];
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
    //Dropdown Status
    this.status = [
      { status: 'Activo'},
      { status: 'Bloqueado'},
      { status: 'Cancelado'}
    ];
  }

  onSubmit() {
    if (this.proveedorsForm.valid) {
      console.log(this.proveedorsForm.value);
    } else {
      console.log('Formulario no valido');
    }
  }

}
