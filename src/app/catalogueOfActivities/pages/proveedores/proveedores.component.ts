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
      { name: 'Pereira', deparment: 'Risaralda' },
      { name: 'Bogota', deparment: 'Cundinamarca' },
      { name: 'Medellin', deparment: 'Antioquia' },
      { name: 'Cali ', deparment: 'Valle' },
      { name: 'Pasto', deparment: 'Nariño' },
      { name: 'Bucaramanga', deparment: 'Santander' },
      { name: 'Cartagena', deparment: 'Bolivar' },
      { name: 'Monteria', deparment: 'Cordoba' },
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
      { identification: 'Pasaporte' },
      { identification: 'Cedula de Extranjeria' },
      { identification: 'NIT' },
      { identification: 'Tarjeta de Identidad' },
    ];
    this.numberDocument = [
      { number: '#', typeDocument: 'Cedula de Ciudadania' },
    ];
  }

  onSubmit() {
    if (this.proveedorsForm.valid) {
      console.log(this.proveedorsForm.value);
    } else {
      console.log('Formulario no valido');
    }
  }

  openNew() {
    this.proveedor = {};
    this.submitted = false;
    this.proveedorDialog = true;
  }

  viewProveedor(proveedor: proveedores) {
    this.proveedor = { ...proveedor };
    this.viewDialog = true;
  }

  deleteSelectedProveedors() {
    if (this.SelectedProveedor && this.SelectedProveedor.length > 0) {
      this.confirmationService.confirm({
        message: '¿Estás seguro de eliminar los proveedores seleccionados?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.proveedores = this.proveedores.filter(
            (val) => !this.SelectedProveedor?.includes(val)
          );
          this.SelectedProveedor = [];
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Proveedores eliminados',
            life: 3000,
          });
        },
      });
    }
  }

  editProveedor(proveedor: proveedores) {
    this.proveedor = { ...proveedor };
    this.proveedorDialog = true;
  }

  deleteProveedor(proveedor: proveedores) {
    this.confirmationService.confirm({
      message: 'Estas seguro de eliminar ' + proveedor.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-traingle',
      accept: () => {
        this.proveedores = this.proveedores.filter(
          (val) => val.id !== proveedor.id
        );
        this.proveedor = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Succesful',
          detail: 'Proveedor eliminado',
          life: 3000,
        });
      },
    });
  }

  // Cierra el dialogo de edicion
  hideDialog() {
    this.proveedorDialog = false;
    this.submitted = false;
  }

  //Cierra el dialogo de solo lectura
  hideViewDialog() {
    this.viewDialog = false;
  }

  saveProveedor() {
    this.submitted = true;

    if (this.proveedorsForm.valid) {
      if (this.proveedor.id) {
        // Asegúrate de que id esté definido y sea una cadena
        const index = this.findIndexById(this.proveedor.id);
        if (index !== -1) {
          this.proveedores[index] = this.proveedor;
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Proveedor actualizado',
            life: 3000,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Proveedor no encontrado',
            life: 3000,
          });
        }
      } else {
        // Agregar nuevo proveedor
        this.proveedor.id = this.createId(); // Asignar un nuevo ID
        this.proveedores.push(this.proveedor);
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Proveedor agregado',
          life: 3000,
        });
      }

      this.proveedorDialog = false; // Cerrar diálogo
      this.proveedor = {}; // Limpiar objeto de proveedor
    }
  }

  findIndexById(id: string | number): number {
    return this.proveedores.findIndex((proveedor) => proveedor.id === id);
  }

  createId(): number {
    return Math.floor(Math.random() * 100000);
  }

  applyGlobalFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (this.dt1) {
      this.dt1.filterGlobal(inputElement.value, 'contains');
    }
  }
}
