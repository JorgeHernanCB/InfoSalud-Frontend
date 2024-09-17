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
  PrincipalSede, 
  Active,
  Special,
  serviceHabilitado
} from '../../../../models/interface/proveedores.interface';
import { ProveedoresService } from '../../../../../service/proveedores/proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TableLocationService } from '../../../../../service/table-location(sedes)/table-location.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Location } from '../../../../models/interface/location.interface';
import { TableSpecialService } from '../../../../../service/table-special(especialidades)/table-special.service';
import { TableServicesService } from '../../../../../service/table-services(serviciosHabilitados)/table-services.service';



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
  public locations!: Location[];
  SelectedLocations!: Location[] | null;
  sedesDialog: boolean = false;
  submittedSede: boolean = false;

  sedesAddEdit: boolean = false;
  submittedSedeAddEdit: boolean = false;
  location!: Location;

  //Specials
  displaySpecialsDialog: boolean = false
  specials!: Special[];
  specialDialog: boolean = false;
  SelectedSpecials!: Special[] | null;
  specialAddEdit: boolean = false;
  submittedSpecials: boolean = false;
  special!: Special;

  // Servicios habilitados
  serviceUpload: boolean = false;
  serviceHabilitado!: serviceHabilitado[]



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

  // Sedes
  public sedesForm = new FormGroup({
    id: new FormControl<number>(0, { nonNullable: true }),
    code: new FormControl<number>(0, [Validators.required]), // Código como número no nulo
    name: new FormControl<string>(''),
    address: new FormControl<string>(''),
    active: new FormControl<string>(''),
    principalSede: new FormControl<string>('', [Validators.required]),
    departament: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),  
  });

  // Specials
  public specialForm = new FormGroup({
    id: new FormControl<number>(0, { nonNullable: true }),
    code: new FormControl<number>(0, [Validators.required]),
    name: new FormControl<string>(''),
  });


  //Dropdowns
  public typeDocument: TypeDocument[] | undefined = [];
  public typePerson: TypePerson[] | undefined = [];
  public departament: Departament[] | undefined = [];
  public cities: City[] | undefined = [];
  public typeProviders: TypeProviders[] | undefined = [];
  public status: Status[] | undefined = [];
  public principalSede: PrincipalSede[] | undefined = [];
  public activo: Active[] | undefined = [];
  public especial: Special[] | undefined = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proveedoresService: ProveedoresService,
    private tableLocationService: TableLocationService,
    private tableSpecialService: TableSpecialService,
    private tableServiceService: TableServicesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {
    this.specialForm.get('code')?.disable();
  }

  ngOnInit(): void {

    //Tabla de sedes
    this.tableLocationService.getData().then((data) => {
      this.locations = data.map((item: any) => ({
        ...item,
        active: item.active === 'true' || item.active === 'true' || item.active === '1' ? true : false
      }));

    });

    //Tabla de especialidades
    this.tableSpecialService.getData().then((data) =>{
      this.specials = data.map((item: any) => ({
        ...item,
        active: item.active === 'true' || item.active === 'true' || item.active === '1' ? true : false
      }));
    });

    //Tabla de servicios habilitados
    this.tableServiceService.getData().then((data) =>{
      this.serviceHabilitado = data.map((item: any) => ({
        ...item,
        active: item.active === 'true' || item.active === 'true' || item.active === '1' ? true : false
      }));
    });


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
    this.principalSede = [
      { name: 'Si'},
      { name: 'No'}
    ];
    this.activo = [
      { name: 'Si'},
      { name: 'No'}
    ];

    this.especial = [
      { code: 123 , name: 'Ambulancia'},
      { code: 134 , name: 'Centro de cirugia ambulatoria'},
      { code: 142 , name: 'Anestesia'},
      { code: 111 , name: 'Cardiologia'},
      { code: 112 , name: 'Servicios de quiropractico'},
      { code: 113 , name: 'Laboratorio Clinico'},
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

  /* SECCION DE ESTADOS */
  // -------------------------------------------------------------------

  //Agregar nueva sede
  openNewSede(){
    this.sedesForm.reset();
    this.submittedSedeAddEdit = false;
    this.sedesAddEdit = true;
  }

  //Cierra el dialogo de edicion
  hideSedesDialog(){
    this.sedesDialog = false;
    this.submittedSede = false;
  }

  //Cierra el dialogo de editar
  hideSedeDialogAddEdit(){
    this.sedesAddEdit = false;
    this.submittedSedeAddEdit = false;
  }

  //Guardar sede
  saveSede(){
    this.submittedSedeAddEdit = true;
    if(this.sedesForm.valid){
      const formValue = this.sedesForm.value;

      const sedeActualizado: Location = {
        id: formValue.id !== null ? formValue.id: undefined,
        code: formValue.code ?? undefined,
        name: formValue.name ?? undefined,
        address: formValue.address ?? undefined,
        active: formValue.active ?? undefined,
        principalSede: formValue.principalSede ?? undefined,
        departament: formValue.departament ?? undefined,
        city: formValue.city ?? undefined,
      };

      console.log('Sede actualizada', sedeActualizado)

      this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Sede guardada exitosamente', life: 3000});
      this.hideSedeDialogAddEdit();      
    }
  }

  // Editar Sede
  editSede(location: Location){
    this.sedesForm.patchValue({ ...location });
    this.sedesAddEdit = true;
  }


  // Eliminar Sedes
  deleteSelectedSedes() {
    if (this.SelectedLocations && this.SelectedLocations.length > 0) {
      this.confirmationService.confirm({
        message: '¿Estás seguro de eliminar las sedes seleccionados?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.locations = this.locations.filter(val => !this.SelectedLocations?.includes(val));
          this.SelectedLocations = [];
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Proveedores eliminados', life: 3000 });
        }
      });
    }
  }

  //Eliminar sede
  
  deleteSede(location: Location){
    this.confirmationService.confirm({
      message: 'Estas seguro de eliminar ' + location.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-traingle',
      accept: () => {
        this.locations = this.locations.filter((val) => val.id !== location.id)
        this.SelectedLocations = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Succesful',
          detail: 'Proveedor eliminado',
          life: 3000
        });
      }
    });
  }

  /* SECCION DE SPECIALS */
  // --------------------------------------------------

  openNewSpecial(){
    this.specialForm.reset();
    this.submittedSpecials = false;
    this.specialAddEdit = true;
  }

  onSpecialsHide(){
    this.displaySpecialsDialog = false;
  }

  //Cierra el dialogo de edicion
  hideSpecialDialog(){
    this.specialDialog = false;
    this.submittedSpecials = false;
  }

  //Cierra el dialogo de editar
  hideSpecialDialogAddEdit(){
    this.specialAddEdit = false;
    this.submittedSpecials = false;
  }

  //Guardar sede
  saveSpecial(){
    this.submittedSpecials = true;
    if(this.specialForm.valid){
      const formValue = this.specialForm.value;

      const specialActualizado: Special = {
        code: formValue.code ?? undefined,
        name: formValue.name ?? undefined,
      };

      console.log('Sede actualizada', specialActualizado)

      this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Sede guardada exitosamente', life: 3000});
      this.hideSedeDialogAddEdit();      
    }
  }

  // Editar Sede
  editSpecial(special: Special){
    this.specialForm.patchValue({ ...special });
    this.specialAddEdit = true;
  }


  // Eliminar Sedes
  deleteSelectedSpecial() {
    if (this.SelectedSpecials && this.SelectedSpecials.length > 0) {
      this.confirmationService.confirm({
        message: '¿Estás seguro de eliminar las sedes seleccionados?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.specials = this.specials.filter(val => !this.SelectedSpecials?.includes(val));
          this.SelectedSpecials = [];
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Proveedores eliminados', life: 3000 });
        }
      });
    }
  }

  //Eliminar special
  
  deleteSpecial(special: Special){
    this.confirmationService.confirm({
      message: 'Estas seguro de eliminar ' + special.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-traingle',
      accept: () => {
        this.specials = this.specials.filter((val) => val.id !== special.id)
        this.SelectedSpecials = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Succesful',
          detail: 'Proveedor eliminado',
          life: 3000
        });
      }
    });
  }

  // SECCION SERVICIOS HABILITADOS
  // ------------------------------------------

  openNewServiceHabilitado(){
    // this.sedesForm.reset();
    // this.submittedSedeAddEdit = false;
    this.serviceUpload = true;
  }

  //Cerrar modal Upload
  onServiceHide(){
    this.serviceUpload = false;
  }

  onUploadService(event: any){
    console.log('Archivo subido', event.files);
  }



}
