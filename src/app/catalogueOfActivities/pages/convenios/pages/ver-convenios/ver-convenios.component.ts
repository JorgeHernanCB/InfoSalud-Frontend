import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Convenios,typeAgreement } from '../../../../models/interface/convenios.interface';
import { TypeDocument, TypeProviders, Status, TypePerson } from '../../../../models/interface/proveedores.interface';
import { TableAgreemetsService } from '../../../../../service/table-agreement(convenios)/table-agreements.service';


@Component({
  selector: 'app-ver-convenios',
  templateUrl: './ver-convenios.component.html',
  styleUrl: './ver-convenios.component.css'
})
export class VerConveniosComponent implements OnInit {


    //Datos convenios
  public viewConveniosForm = new FormGroup({
    numberAgreement: new FormControl<string>('' , [Validators.required]),
    nameAgreement: new FormControl<string>('', [Validators.required]),
    activeRate: new FormControl<string>('',   [Validators.required]),
    statusAgreement: new FormControl<string>('', [Validators.required]),
  });


  //Informacion de general de convenios y proveedores
  public viewGeneralForm = new FormGroup({
    numberAgreement: new FormControl<string>('' , [Validators.required]),
    nameAgreement: new FormControl<string>('', [Validators.required]),
    typeAgreement: new FormControl<string>('',   [Validators.required]),
    codeProvider: new FormControl<string>('', [Validators.required]),
    dateStart: new FormControl<string>('', [Validators.required]),
    dateFinish: new FormControl<string>('', [Validators.required]),
    statusAgreement: new FormControl<string>('', [Validators.required]),
    automaticRenewal: new FormControl<string>('', [Validators.required]),
    agreementBeforeRenewal: new FormControl<string>('', [Validators.required]),
    agreementAfterRenewal: new FormControl<string>('', [Validators.required]),
    //Proveedores
    typeDocument: new FormControl<string>('', [Validators.required]),
    numberDocument: new FormControl<string>({ value: '', disabled: true }, [Validators.required]),
    nameProviders: new FormControl<string>({ value: '', disabled: true }, [Validators.required]),
    typeProviders: new FormControl<string>('', [Validators.required]),
    statusProvider: new FormControl<string>('', [Validators.required]),
    typePerson: new FormControl<string>('', [Validators.required]),
    businessNameProviders: new FormControl<string>('', [Validators.required]),
  });

  //Caracteristicas del convenio
  public viewCharacteristicsForm = new FormGroup({
    priorityRemission: new FormControl<string>('' , [Validators.required]),
    valueUVR: new FormControl<string>('', [Validators.required]),
  });

  convenios!: Convenios[];
  allConvenios: any[] = [];

  //Dropdowns
  public typeAgreements: typeAgreement[] | undefined = [];
  public typeDocument: TypeDocument[] | undefined = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];
  public typePerson: TypePerson[] | undefined = [];
  public priorityRemission: any[] = [];





  constructor(
    private tableAgreemetsService: TableAgreemetsService,

  ) { }

  ngOnInit(): void {

    this.tableAgreemetsService.getData().then((data) => {
      console.log('Datos cargados',data);
      if(data){
        this.allConvenios = data;
        this.convenios = [...this.allConvenios];
      }else{
        console.error('No se pudieron cargar los valores');
      }

    });




    this.initializerDropdowns();
  }

  initializerDropdowns() {

    this.typeAgreements = [
      { typeAgreement: 'General' },
      { typeAgreement: 'Red Especial' },
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

    this.status = [
      { status: 'Activo' },
      { status: 'Bloqueado' },
      { status: 'Cancelado' },
    ];

    this.typePerson = [
      { typePerson: 'Cedula Ciudadania' },
      { typePerson: 'NIT' },
      { typePerson: 'DNI' },
      { typePerson: 'PASAPORTE' },
    ];
    this.priorityRemission = [
      { priorityRemission: 'Diamante' },
      { priorityRemission: 'Rubi' },
      { priorityRemission: 'Platino' },
      { priorityRemission: 'Esmeralda' },
    ];

  }


}
