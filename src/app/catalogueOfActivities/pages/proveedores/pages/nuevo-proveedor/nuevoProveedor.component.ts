import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { TableLocationService } from '../../../../../service/table-location(sedes)/table-location.service';
import { TableSpecialService } from '../../../../../service/table-special(especialidades)/table-special.service';
import {
  City,
  TypeDocument,
  TypePerson,
  NumberDocument,
  TypeProviders,
  Status,
  Active,
  PrincipalSede,
  Departament,
  Special,
} from '../../../../models/interface/proveedores.interface';
import { Location } from '../../../../models/interface/location.interface';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'infoSalud-nuevoProveedor',
  templateUrl: './nuevoProveedor.component.html',
  styleUrl: './nuevoProveedor.component.css',
})
export class NuevoProveedorComponent {
  // Dialogo del Upload
  displayUploadDialog: boolean = false;

  // Dialogo del buscar numero
  displaySearchDialog: boolean = false;
  searchTerm: string = '';

  //Variable para el spinner
  loading: boolean = true;

  public nuevoProveedorForm: FormGroup;
  constructor(
    private tableLocationService: TableLocationService,
    private tableSpecialService: TableSpecialService,
    private formBuilder: FormBuilder,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    this.nuevoProveedorForm = this.formBuilder.group({
      id: [''],
      name: [{ value: '', disabled: true }, Validators.required],
      code: ['', Validators.required],
      address: ['', Validators.required],
      typeDocument: [{ value: '' }, Validators.required],
      typePerson: ['', Validators.required],
      typeProviders: ['', Validators.required],
      numberDocument: ['', Validators.required],
      status: [{ value: '', disabled: true }, Validators.required],
      city: ['', Validators.required],
      departament: ['', Validators.required],
      selectPlaces: ['', Validators.required],
      active: ['', Validators.required],
      sedePrincipal: ['', Validators.required],
    });
  }

  //Formulario sede
  public sedesForm = new FormGroup({
    id: new FormControl<number>(0, { nonNullable: true }),
    code: new FormControl<number>(0, [Validators.required]), // Código como número no nulo
    name: new FormControl<string>(''),
    sede: new FormControl<string>('', [Validators.required]),
    specials: new FormControl<string>(''),
    address: new FormControl<string>(''),
    active: new FormControl<string>(''),
    principalSede: new FormControl<string>('', [Validators.required]),
    departament: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
  });

  //Formulario specials
  public specialForm = new FormGroup({
    id: new FormControl<number>(0, { nonNullable: true }),
    code: new FormControl<number>(0, [Validators.required]),
    specials: new FormControl<string>(''),
  });

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

  //Sedes
  showTable: boolean = false;
  addSedeDialog: boolean = false;

  //Especialidades
  showTableSpecials: boolean = false;
  addSpecialDialog: boolean = false;

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
        active:
          item.active === 'true' ||
          item.active === 'true' ||
          item.active === '1'
            ? true
            : false,
      }));
    });

    this.tableSpecialService.getData().then((data) => {
      this.specials = data.map((item: any) => ({
        ...item,
        active:
          item.active === 'true' ||
          item.active === 'true' ||
          item.active === '1'
            ? true
            : false,
      }));
    });

    //ProgressSpinner
    setTimeout(() => {
      this.loading = false;
    }, 1000);

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
      { name: 'Auditor' },
      { name: 'Investigador' },
      { name: 'Laboratorio' },
      { name: 'IPS' },
      { name: 'Clinica' },
      { name: 'Hospital' },
    ];

    this.active = [{ name: 'Si' }, { name: 'No' }];

    this.sedePrincipal = [{ name: 'Si' }, { name: 'No' }];
  }

  // Modal de Cancelar
  showConfirmCancelar() {
    this.confirmationService.confirm({
      message: 'Estas seguro de salir ?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.router.navigate(['/proveedores']);
      },
    });
  }

  showNumberDocumentDialog() {
    this.displaySearchDialog = true;
  }

  // Metodo para abrir el dialogo del Upload
  openUploadDialog() {
    this.displayUploadDialog = true;
  }

  //Metodo para manejar el evento de subida
  onUpload(event: any) {
    console.log('Archivo subido', event.files);
  }

  //Metodo para cerrar el dialogo
  onDialogHide() {
    this.displayUploadDialog = false;
  }

  //Abrir modal para agregar sedes
  openNewSedes() {
    this.showTable = false;
    this.addSedeDialog = true;
  }

  //Cerrar modal sede
  onSedeHide() {
    this.showTable = false;
    this.addSedeDialog = false;
  }

  //Abrir modal para agregar especialidades
  openNewSpecials() {
    this.showTableSpecials = false;
    this.addSpecialDialog = true;
  }

  //Cerrar modal special
  onSpecialHide() {
    this.showTableSpecials = false;
    this.addSpecialDialog = false;
  }
}
