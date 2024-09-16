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
  NumberDocument,
} from '../../../../models/interface/proveedores.interface';
import { ProveedoresService } from '../../../../../service/proveedores/proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'infoSalud-modificar-Proveedor',
  templateUrl: './modificar-Proveedor.component.html',
  styleUrl: './modificar-Proveedor.component.css',
})
export class ModificarProveedorComponent implements OnInit {
  public proveedor!: Proveedores;
  public isViewMode: boolean = false;
  submitted: boolean = false;

  //Mostrar modales
  //Sede
  displayStatusDialog: boolean = false;


  // Formularios para ver
  public viewForm = new FormGroup({
    name: new FormControl({ value: '', disabled: true }),
    typeDocument: new FormControl({ value: '', disabled: true }),
    numberDocument: new FormControl({ value: '', disabled: true }),
    typeProviders: new FormControl({ value: '', disabled: true }),
    status: new FormControl({ value: '', disabled: true }),
    departament: new FormControl({ value: '', disabled: true }),
    city: new FormControl({ value: '', disabled: true }),
    typePerson: new FormControl({ value: '', disabled: true }),
  });
  

  public editForm = new FormGroup({
    name: new FormControl({ value: '', disabled: true }),
    typeDocument: new FormControl({ value: '', disabled: true }),
    numberDocument: new FormControl({ value: '', disabled: true }),
    typeProviders: new FormControl({ value: '', disabled: true }),
    status: new FormControl({ value: '', disabled: true }),
    departament: new FormControl({ value: '', disabled: true }),
    city: new FormControl({ value: '', disabled: true }),
    typePerson: new FormControl({ value: '', disabled: true }),
  });

  //Dropdowns
  public typeDocument: TypeDocument[] | undefined = [];
  public typePerson: TypePerson[] | undefined = [];
  public departament: Departament[] | undefined = [];
  public cities: City[] | undefined = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proveedoresService: ProveedoresService
  ) {}

  ngOnInit(): void {
    this.initializeDropdowns();

    // Obtener el ID de los parámetros de la ruta
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convertir a número si es necesario
      this.isViewMode = this.route.snapshot.data['isViewMode'] || false; // Obtener el valor de isViewMode

      // Llamar al servicio para obtener los datos del proveedor
      const proveedor = this.proveedoresService.getProveedoresById(id);

      if (proveedor) {
        this.proveedor = proveedor;
        this.updateForms();
      } else {
        console.error('Proveedor no encontrado');
      }
    });
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

  updateForms() {
    if (this.isViewMode) {
      // Update view form with values
      this.viewForm.patchValue({
        name: this.proveedor.name || '',
        typePerson: this.proveedor.typePerson?.typePerson || '',
        typeDocument: this.getTypeDocumentValue(this.proveedor.typeDocument),
        numberDocument: this.getNumberDocumentValue(this.proveedor.numberDocument),
        typeProviders: this.proveedor.typeProviders?.name || '',
        status: this.proveedor.status?.status || '',
        departament: this.proveedor.departament?.name || '',
        city: this.proveedor.city?.city || '',
      });
    } else {
      // Update edit form with values
      this.editForm.patchValue({
        name: this.proveedor.name || '',
        typePerson: this.proveedor.typePerson?.typePerson || '',
        typeDocument: this.getTypeDocumentValue(this.proveedor.typeDocument),
        numberDocument: this.getNumberDocumentValue(this.proveedor.numberDocument),
        typeProviders: this.proveedor.typeProviders?.name || '',
        status: this.proveedor.status?.status || '',
        departament: this.proveedor.departament?.name || '',
        city: this.proveedor.city?.city || '',
      });
    }
  }

  getNumberDocumentValue(numberDocument?: NumberDocument | string | number | null): string {
    if (typeof numberDocument === 'object' && numberDocument !== null) {
      return numberDocument.number?.toString() || '';
    } else if (typeof numberDocument === 'number') {
      return numberDocument.toString();
    } else if (typeof numberDocument === 'string') {
      return numberDocument;
    }
    return '';
  }

  getTypeDocumentValue(typeDocument?: TypeDocument): string {
    if (!typeDocument) return '';
    return typeDocument.identification?.toString() || 
           typeDocument.cc?.toString() || 
           typeDocument.nit?.toString() || 
           typeDocument.passport?.toString() || 
           '';
  }

  onSubmit() {
    if (this.editForm.valid) {
      console.log(this.editForm.value);
      // Aquí puedes enviar los datos actualizados al servidor o realizar otra acción
    } else {
      console.log('Formulario no válido');
    }
  }
  //Abrir modal de estado
  showStatusDialog(){
    this.displayStatusDialog = true;
  }

  //Cerrar modal
  onStatusHide(){
    this.displayStatusDialog = false;
  }

}
