import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Auditorias,
  City,
  Departament,
  State,
  Type,
  TypeDocument,
} from '../../models/interface/auditorias.interface'
import { Router } from '@angular/router';
import { Ramo } from '../../models/interface/convenios.interface';



@Component({
  selector: 'app-auditorias',
  templateUrl: './auditorias.component.html',
  styles: ``
})
export class AuditoriasComponent implements OnInit{

  public auditorsForm = new FormGroup({
    id: new FormControl<string>(''),
    nitProvider: new FormControl<string>('', [Validators.required]),
    numberIdentificationAuditor: new FormControl<string>('', [Validators.required]),
    numberAuthorization: new FormControl<string>('', [Validators.required]),
    numberAuditoria: new FormControl<string>('', [Validators.required]),
    departament: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
    typeAuditoria: new FormControl<string>('', [Validators.required]),
    state: new FormControl<string>('', [Validators.required]),
    ramo: new FormControl<string>('', [Validators.required]),
    plate: new FormControl<string>('', [Validators.required]),
    numberFacture: new FormControl<string>('', [Validators.required]),
    numberPolicy: new FormControl<string>('', [Validators.required]),
    numberAccident: new FormControl<string>('', [Validators.required]),
    auditsNoNumberAccident: new FormControl<string>('', [Validators.required]),
    user: new FormControl<string>({ value: '', disabled: true }, [
      Validators.required,
    ]),
    dateAuditinitial: new FormControl<string>('', [Validators.required]),
    dateAuditEnd: new FormControl<string>('', [Validators.required]),
    dateAccidentEnd: new FormControl<string>('', [Validators.required]),
    dateAuthorizationInitial: new FormControl<string>('', [Validators.required]),
    dateAuthorizationEnd: new FormControl<string>('', [Validators.required]),
    typeDocument: new FormControl<string>('', [Validators.required]),
    numberIdentificationPerson: new FormControl<string>('', [Validators.required]),
    namePerson: new FormControl<string>('', [Validators.required]),
  });

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  auditorias!: Auditorias[];
  allAuditorias: any[] = [];

  //Dropdowns
  public typeAuditoria: Type[] | undefined=[];
  public state: State[] | undefined=[];
  public departament: Departament[] | undefined=[];
  public city: City[] | undefined=[];
  public ramo: Ramo[] | undefined=[];
  public typeDocument: TypeDocument[] | undefined=[];


  ngOnInit(): void {
    this.initializeDropdowns();
  }

  // Dropdowns Auditorias
  initializeDropdowns() {

    this.typeAuditoria = [
      { type: 'Auditor'},
      { type: 'Investigador'},
    ];
    
    this.typeDocument = [
      { type: 'Cedula de Ciudadania' },
      { type: 'NIT' },
      { type: 'DNI' },
      { type: 'PASAPORTE' },
    ];


    this.state = [
      { state: 'ASIGNADA'},
      { state: 'ABIERTA' },
      { state: 'RECHAZADA' },
      { state: 'REASIGNADA' },
      { state: 'TERMINADA' },
      { state: 'CERRADA' },
    ];

    this.ramo = [
      { ramo: 'ARL'},
      { ramo: 'SALUD'},
      { ramo: 'SOAT'},
    ];

    this.departament = [
      { departament: 'Risaralda' },
      { departament: 'Caldas' },
      { departament: 'Antioquia' },
      { departament: 'Guajira' },
      { departament: 'Quindio' },
      { departament: 'Valle' },
      { departament: 'Cundinamarca' },
      { departament: 'Nariño' },
      { departament: 'Santander' },
      { departament: 'Bolivar' },
      { departament: 'Cordoba' },
    ];

    this.city = [
      { city: 'Pereira' },
      { city: 'Manizales' },
      { city: 'Medellin' },
      { city: 'Riohacha' },
      { city: 'Armenia' },
      { city: 'Cali' },
      { city: 'Bogota' },
      { city: 'Pasto' },
      { city: 'Bucaramanga' },
      { city: 'Cartagena' },
      { city: 'Monteria' },
    ];
  }

  onSubmit() {
    if (this.auditorsForm.valid) {
      console.log(this.auditorsForm.value);
    } else {
      console.log('Formulario no valido');
    }
  }

  onSearch(){
    const formValues = this.auditorsForm.value;
    console.log('Valores del formulario', formValues);

    //Si hay algun campo lleno
    const isAnyField = Object.values(formValues).some((value) => value);
    console.log('Hay algo lleno?', isAnyField);

    if (!isAnyField) {
      this.auditorias = [...this.allAuditorias];
      this.cdr.detectChanges();
      return;
    }
    // Filtrar proveedores basado en los valores ingresados
    this.auditorias = this.allAuditorias.filter((auditorias) => {

      //TO-DO VERIFICAR QUE OTROS CAMPOS SON NECESARIOS PARA EL FILTRO

      // Comprobar cada condición y mostrar en la consola
      const matches = {
        numberAgreement:
          !formValues.nitProvider ||
          auditorias.numberAgreement === formValues.nitProvider,
        numberIdentificationAuditor:
          !formValues.numberIdentificationAuditor ||
          auditorias.numberIdentificationAuditor === formValues.numberIdentificationAuditor,
        numberAuthorization:
          !formValues.numberAuthorization ||
          auditorias.companyNameProviders === formValues.numberAuthorization,
        numberAuditoria:
          !formValues.numberAuditoria ||
          auditorias.numberAuditoria === formValues.numberAuditoria,
        departament:
          !formValues.departament ||
          auditorias.departament === formValues.departament,
        city: 
          !formValues.city || auditorias.city === formValues.city,
        state:
          !formValues.state ||
          auditorias.state === formValues.state,
        typeAuditoria:
          !formValues.typeAuditoria ||
          auditorias.typeAuditoria === formValues.typeAuditoria,
        plate:
          !formValues.plate ||
          auditorias.plate === formValues.plate,
        numberFacture:
          !formValues.numberFacture ||
          auditorias.numberFacture === formValues.numberFacture,
        numberPolicy:
          !formValues.numberPolicy ||
          auditorias.numberPolicy === formValues.numberPolicy,
        numberAccident:
          !formValues.numberAccident ||
          auditorias.numberAccident === formValues.numberAccident,
        auditsNoNumberAccident:
          !formValues.auditsNoNumberAccident ||
          auditorias.auditsNoNumberAccident === formValues.auditsNoNumberAccident,


        // state:
        //   !formValues.state ||
        //   auditorias.state
        //     .toLowerCase()
        //     .includes(formValues.state.toLowerCase()),
        //  typeDocument: !formValues.typeDocument || proveedor.typeDocument === formValues.typeDocument,
        // numberDocument: !formValues.numberDocument || proveedor.numberDocument === formValues.numberDocument,
      };

      // Log para ver si el proveedor coincide con los criterios
      console.log('Evaluando convenios:', auditorias);
      console.log('Coincide con formulario?', matches);

      // Retornar true si todas las condiciones se cumplen
      return Object.values(matches).every((condition) => condition);
    });

    console.log('Convenios filtrados:', this.auditorias);

    this.cdr.detectChanges();

  }

  clearForm(){
    this.auditorsForm.reset() //Limpia el formulario
  }

}
