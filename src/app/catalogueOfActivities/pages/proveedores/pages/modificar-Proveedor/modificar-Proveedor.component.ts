import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TypePerson, Departament, City, TypeProviders, Status  } from '../../../../models/interface/proveedores.interface';

@Component({
  selector: 'infoSalud-modificar-Proveedor',
  templateUrl: './modificar-Proveedor.html',
  styleUrl: './modificar-Proveedor.component.css'
})
export class ModificarProveedorComponent implements OnInit {

  public modificaProveedorForm = new FormGroup({

    name: new FormControl<string>(''),
    typeDocument: new FormControl<string>(''),
    numberDocument: new FormControl<string>(''),
    typeProviders: new FormControl<string>(''),
    status: new FormControl<string>(''),
    departament: new FormControl<string>(''),
    city: new FormControl<string>(''),


  });

  //Dropdowns
  public typeDocument: TypePerson[] | undefined = [];
  public departament: Departament[] | undefined = [];
  public cities: City[] | undefined = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];



  constructor() { }

  ngOnInit(): void {

    this.initializeDropdowns();
  }
  initializeDropdowns() {

    this.typeDocument = [
      { typePerson: 'Cedula Ciudadania' },
      { typePerson: 'NIT' },
      { typePerson: 'DNI' },
      { typePerson: 'PASAPORTE' },
    ];
    //Dropdown Status
    this.status = [
      { status: 'Activo'},
      { status: 'Bloqueado'},
      { status: 'Cancelado'}
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
      { name: 'Risaralda'}
    ];

  }

  onSubmit() {
    if (this.modificaProveedorForm.valid) {
      console.log(this.modificaProveedorForm.value);
    } else {
      console.log('Formulario no valido');
    }
  }


}

