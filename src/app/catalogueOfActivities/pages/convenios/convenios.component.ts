import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AutomaticRenewal,
  City,
  Convenios,
  Departament,
  Product,
  Ramo,
  StatusAgreement,
  typeAgreement,
} from '../../models/interface/convenios.interface';
import { TypeProviders } from '../../models/interface/proveedores.interface';
import { state } from '@angular/animations';

@Component({
  selector: 'infoSalud-convenios',
  templateUrl: './convenios.component.html',
  styleUrl: './convenios.component.css',
})
export class ConveniosComponent implements OnInit {
  public conveniosForm = new FormGroup({
    id: new FormControl<string>(''),
    nameAgreement: new FormControl<string>(''),
    numberAgreement: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    typeAgreement: new FormControl<string>('', [Validators.required]),
    statusAgreement: new FormControl<string>('', [Validators.required]),
    nitProviders: new FormControl<string>('', [Validators.required]),
    companyNameProviders: new FormControl<string>('', [Validators.required]),
    businessNameProviders: new FormControl<string>('', [Validators.required]),
    codeProvider: new FormControl<string>('', [Validators.required]),
    dateStart: new FormControl<string>('', [Validators.required]),
    dateFinish: new FormControl<string>('', [Validators.required]),
    ramo: new FormControl<string>('', [Validators.required]),
    product: new FormControl<string>('', [Validators.required]),
    automaticRenewal: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
    departament: new FormControl<string>('', [Validators.required]),
    user: new FormControl<string>({ value: '', disabled: true }, [
      Validators.required,
    ]),
    typeProviders: new FormControl<string>('', [Validators.required]),
  });
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  convenios!: Convenios[];
  allConvenios: any[] = [];

  //Dropdowns
  public typeAgreements: typeAgreement[] | undefined = [];
  public statusAgreements: StatusAgreement[] | undefined = [];
  public ramos: Ramo[] | undefined = [];
  public products: Product[] | undefined = [];
  public automaticRenewals: AutomaticRenewal[] | undefined = [];
  public departaments: Departament[] | undefined = [];
  public cities: City[] | undefined = [];

  ngOnInit(): void {
    this.initializeDropdowns();
  }

  //Dropdowns Convenios

  initializeDropdowns() {
    this.typeAgreements = [
      { typeAgreement: 'General' },
      { typeAgreement: 'Red Especial' },
    ];

    this.statusAgreements = [
      { statusAgreement: 'Activo' },
      { statusAgreement: 'Bloqueado' },
      { statusAgreement: 'Deshabilitado' },
    ];

    this.ramos = [
      { ramo: 'Salud' },
      { ramo: 'Automoviles' },
      { ramo: 'SOAT' },
      { ramo: 'ARL' },
    ];

    this.products = [
      { product: 'Urgencias' },
      { product: 'Especialización' },
      { product: 'Salud' },
    ];
    this.automaticRenewals = [
      { automaticRenewal: 'SI' },
      { automaticRenewal: 'NO' },
    ];
    this.departaments = [
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
    this.cities = [
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
    if (this.conveniosForm.valid) {
      console.log(this.conveniosForm.value);
    } else {
      console.log('Formulario no valido');
    }
  }
  onSearch() {
    const formValues = this.conveniosForm.value;

    console.log('Valores del formulario', formValues);

    //Si hay algun campo lleno
    const isAnyField = Object.values(formValues).some((value) => value);

    console.log('Hay algo lleno?', isAnyField);

    if (!isAnyField) {
      this.convenios = [...this.allConvenios];
      this.cdr.detectChanges();
      return;
    }
    // Filtrar proveedores basado en los valores ingresados
    this.convenios = this.allConvenios.filter((convenios) => {

      //TO-DO VERIFICAR QUE OTROS CAMPOS SON NECESARIOS PARA EL FILTRO

      // Comprobar cada condición y mostrar en la consola
      const matches = {
        numberAgreement:
          !formValues.numberAgreement ||
          convenios.numberAgreement === formValues.numberAgreement,
        businessNameProviders:
          !formValues.businessNameProviders ||
          convenios.businessNameProviders === formValues.businessNameProviders,
        companyNameProviders:
          !formValues.companyNameProviders ||
          convenios.companyNameProviders === formValues.companyNameProviders,
        codeProvider:
          !formValues.codeProvider ||
          convenios.codeProvider === formValues.codeProvider,
        departament:
          !formValues.departament ||
          convenios.departament === formValues.departament,
        city: !formValues.city || convenios.city === formValues.city,
        typeProviders:
          !formValues.typeProviders ||
          convenios.typeProviders === formValues.typeProviders,
        nameAgreement:
          !formValues.nameAgreement ||
          convenios.nameAgreement
            .toLowerCase()
            .includes(formValues.nameAgreement.toLowerCase()),
        //  typeDocument: !formValues.typeDocument || proveedor.typeDocument === formValues.typeDocument,
        // numberDocument: !formValues.numberDocument || proveedor.numberDocument === formValues.numberDocument,
      };

      // Log para ver si el proveedor coincide con los criterios
      console.log('Evaluando convenios:', convenios);
      console.log('Coincide con formulario?', matches);

      // Retornar true si todas las condiciones se cumplen
      return Object.values(matches).every((condition) => condition);
    });

    console.log('Convenios filtrados:', this.convenios);

    this.cdr.detectChanges();
  }

  //Clear de form
  clearForm() {
    this.conveniosForm.reset(); // Limpia el formulario
  }

  //Ver Convenios
  showConvenio(convenios: Convenios) {
    this.router.navigate(['convenios/mostrar', convenios.id], {
      state: { convenios: convenios, isViewMode: true },
    });
  }
  //Editar Convenios
  editConvenio(convenios: Convenios) {
    this.router.navigate(['convenios/editar', convenios.id], {
      state: { convenios: convenios, isViewMode: false },
    });
  }
}
