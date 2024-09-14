import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder,FormGroup, Validators, FormControl,} from '@angular/forms';

import { TableFoundService } from './../../../service/table-found/table-found.service';
import { proveedores } from '../../models/interface/dBproveedores.interface';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { TypePerson, City, Departament, TypeDocument, NumberDocument, TypeProviders, Status,Special } from '../../models/interface/proveedores.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'infoSalud-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})

export class ProveedoresComponent implements OnInit {

  public proveedorsForm = new FormGroup({

    id: new FormControl<string>(''),
    name: new FormControl<string>(''),
    code: new FormControl<string>(''),
    typeProviders: new FormControl<string>(''),
    special: new FormControl<string>(''),
    typePerson: new FormControl<string>(''),
    typeDocument: new FormControl<string>(''),
    numberDocument: new FormControl<string>(''),
    city: new FormControl<string>(''),
    departament: new FormControl<string>(''),
    status: new FormControl<string>(''),

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

  //Mostrar Datos en la tabla
  allProveedores: any[] = [];


  //Dropdowns
  public typePerson: TypePerson[] | undefined = [];
  public cities: City[] | undefined = [];
  public deparments: Departament[] | undefined = [];
  public typeDocument: TypeDocument[] | undefined = [];
  public numberDocument: NumberDocument[] | undefined = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];
  public special: Special[] | undefined = [];


  constructor(
    private fb: FormBuilder,
    private tableFoundService: TableFoundService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef,
    private router: Router,
 )
  {}

  ngOnInit(): void {
    this.tableFoundService.getData().then((data) => {
      console.log('Datos cargados',data);
      if(data){
        this.allProveedores = data;
        this.proveedores = [...this.allProveedores];
      }else{
        console.error('No se pudieron cargar los valores');
      }

    });

    this.initializeDropdowns();
  }

  initializeDropdowns(){

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
    //Dropdown list of deparments
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
    //Dropdown typeDocument
    this.typeDocument = [
      { identification: 'Cedula de Ciudadania' },
      { identification: 'NIT' },
      { identification: 'DNI' },
      { identification: 'PASAPORTE' },
    ];
    //Dropdown numberDocument
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
    //Dropdown Special
    this.special = [
      { name: ''},
    ]
  }

  onSubmit() {
    if (this.proveedorsForm.valid) {
      console.log(this.proveedorsForm.value);
    } else {
      console.log('Formulario no valido');
    }
  }

  //Search
  onSearch(){
    const formValues = this.proveedorsForm.value;

    console.log('Valores del formulario', formValues);

    //Si hay algun campo lleno
    const isAnyField = Object.values(formValues).some(value => value);

    console.log('Hay algo lleno?', isAnyField);

    if (!isAnyField){
      this.proveedores = [...this.allProveedores];
      this.cdr.detectChanges();
      return;
    }
    // Filtrar proveedores basado en los valores ingresados
    this.proveedores = this.allProveedores.filter(proveedor => {
      // Comprobar cada condición y mostrar en la consola
      const matches = {
        typeProviders: !formValues.typeProviders || proveedor.typeProviders === formValues.typeProviders,
        status: !formValues.status || proveedor.status === formValues.status,
        departament: !formValues.departament || proveedor.departament === formValues.departament,
        city: !formValues.city || proveedor.city === formValues.city,
        typeDocument: !formValues.typeDocument || proveedor.typeDocument === formValues.typeDocument,
        numberDocument: !formValues.numberDocument || proveedor.numberDocument === formValues.numberDocument,
        name: !formValues.name || proveedor.name.toLowerCase().includes(formValues.name.toLowerCase())
      };

      // Log para ver si el proveedor coincide con los criterios
      console.log('Evaluando proveedor:', proveedor);
      console.log('Coincide con formulario?', matches);

      // Retornar true si todas las condiciones se cumplen
      return Object.values(matches).every(condition => condition);
    });

    console.log('Proveedores filtrados:' ,this.proveedores);

    this.cdr.detectChanges();
  }

  //Clear de form
  clearForm() {
    this.proveedorsForm.reset(); // Limpia el formulario
  }

  //Ver proveedor
  showProveedor(id: string){
    this.router.navigate([`/proveedores/mostrar/${id}`]);
  }

  //editar proveedor
  editProveedor(id: string){
    this.router.navigate([`/proveedores/editar/${id}`]);
  }

}
