import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {
  TypePerson,
  Departament,
  City,
  TypeProviders,
  Status,
  Proveedores,
  TypeDocument,
} from '../../../../models/interface/proveedores.interface';
import { ProveedoresService } from '../../../../../service/proveedores/proveedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'infoSalud-modificar-Proveedor',
  templateUrl: './modificar-Proveedor.html',
  styleUrl: './modificar-Proveedor.component.css',
})
export class ModificarProveedorComponent implements OnInit {
  public proveedores!: Proveedores;
  public proveedor!: Proveedores;
  public proveedorDialog: boolean = false;
  submitted: boolean = false;
  statuses!: any[];

  public modificaProveedorForm = new FormGroup({

    name: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    typeDocument: new FormControl<string>('', {
      validators: Validators.required,
    }),
    numberDocument: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    typeProviders: new FormControl<string>('value:, disabled: true', {
      nonNullable: true,
      validators: Validators.required,
    }),
    status: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    departament: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    city: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    typePerson: new FormControl<string>('', {
      nonNullable: true, validators: Validators.required }),
  });

  //Dropdowns
  public typeDocument: TypeDocument[] | undefined = [];
  public typePerson: TypePerson[] | undefined = [];
  public departament: Departament[] | undefined = [];
  public cities: City[] | undefined = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeDropdowns();



  }
  initializeDropdowns() {

    this.typePerson = [
      { typePerson: 'Cedula Ciudadania' },
      { typePerson: 'NIT' },
      { typePerson: 'DNI' },
      { typePerson: 'PASAPORTE' },
    ];
    //Dropdown Status
    this.status = [
      { status: 'Activo' },
      { status: 'Bloqueado' },
      { status: 'Cancelado' },
    ];

    this.typeDocument = [
      { identification: 'Cedula de Ciudadania' },
      { identification: 'Pasaporte' },
      { identification: 'Cedula de Extranjeria' },
      { identification: 'NIT' },
      { identification: 'Tarjeta de Identidad' },
    ];

    //Dropdown TypeProviders
    this.typeProviders = [
      { name: 'IPS' },
      { name: 'Clinica' },
      { name: 'Hospital' },
      { name: 'Laboratorio' },
      { name: 'Investigador' },
      { name: 'Auditor' },
    ];

    this.departament = [
      { name: 'Cundinamarca' },
      { name: 'Antioquia' },
      { name: 'Valle del Cauca' },
      { name: 'Santander' },
      { name: 'Nariño' },
      { name: 'Tolima' },
      { name: 'Caldas' },
      { name: 'Cauca' },
      { name: 'Boyacá' },
      { name: 'Meta' },
      { name: 'Huila' },
      { name: 'Cesar' },
      { name: 'Córdoba' },
      { name: 'Magdalena' },
      { name: 'Atlántico' },
      { name: 'Bolívar' },
      { name: 'La Guajira' },
      { name: 'Sucre' },
      { name: 'Chocó' },
      { name: 'Amazonas' },
      { name: 'Putumayo' },
      { name: 'Caquetá' },
      { name: 'Guainía' },
      { name: 'Vaupés' },
      { name: 'San Andrés y Providencia' },
      { name: 'Arauca' },
      { name: 'Casanare' },
      { name: 'Guaviare' },
      { name: 'Vichada' },
      { name: 'Norte de Santander' },
      { name: 'Quindío' },
      { name: 'Risaralda' },
    ];
  }

   editProveedor(proveedor: Proveedores) {
    this.proveedor = { ...proveedor };
    this.modificaProveedorForm.patchValue({
     name: this.proveedor.name || '',
      typePerson: this.proveedor.typePerson || '',
      typeDocument: this.proveedor.typeDocument,
      numberDocument: this.proveedor.numberDocument,
     TypeProviders: this.proveedor.typeProviders,
     Status: this.proveedor.status,
      Departament: this.proveedor.departament,
      City: this.proveedor.city,
   });
   }
   viewDetails(proveedor: Proveedores) {
    this.router.navigate(['/modificar-proveedor'],
      { state: { proveedor } });
    }

  onSubmit() {
    if (this.modificaProveedorForm.valid) {
      console.log(this.modificaProveedorForm.value);
    } else {
      console.log('Formulario no valido');
    }
  }
}
