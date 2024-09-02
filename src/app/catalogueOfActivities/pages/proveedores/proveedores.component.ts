import { Component, OnInit } from '@angular/core';
import { TableFoundService } from './../../../service/table-found/table-found.service';
import { proveedores } from '../../models/interface/dBproveedores.interface';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { TypePerson, City, Deparment, TypeDocument, NumberIndentification } from '../../models/interface/proveedores.interface';

//Components

@Component({
  selector: 'infoSalud-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css',
})

export class ProveedoresComponent implements OnInit {

  public proveedorsForm = new FormGroup({
    id: new FormControl<string>(''),
    name: new FormControl<string>('', {nonNullable: true}),
    codigo: new FormControl<string>(''),
    typePerson: new FormControl<string>(''),
    typeDocument: new FormControl<string>(''),
    numberIndentification: new FormControl<string>(''),
    city: new FormControl<string>(''),
    deparment: new FormControl<string>(''),
    state: new FormControl<string>(''),
    typeSuppliers: new FormControl<string>(''),
    specialtyByLocation: new FormControl<string>(''),
    companyName: new FormControl<string>(''),
    businessReason: new FormControl<string>(''),
    date_start: new FormControl<string>(''),
    date_finish: new FormControl<string>(''),
    })

  value: string | undefined;

  proveedores!: proveedores [];


  //Dropdowns
  public typePerson: TypePerson[] | undefined= [];


  public cities: City[] | undefined = [];

  public deparments: Deparment[] | undefined = [];

  public typeDocument: TypeDocument[] | undefined = [];

  public numberIndentification: NumberIndentification[] | undefined = [];
  //public selectedNumberDocument: numberDocument | undefined;


  constructor(
    private fb: FormBuilder,
    private tableFoundService: TableFoundService
  ){
    // this.proveedorsForm = this.fb.group({
    //   //Se definen los valores del formulario
    //   name: ['',Validators.required],
    //   codigo: ['', Validators.required]
    // });
  }

  ngOnInit(): void {
    this.tableFoundService.getData().then((data)=> {
      this.proveedores = data;
    });


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

  onSubmit() {
    if (this.proveedorsForm.valid){
      console.log(this.proveedorsForm.value);
    }else{
      console.log('Formulario no valido');
    }
  }

}


