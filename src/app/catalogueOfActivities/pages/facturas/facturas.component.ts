import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  Facturas,
  PaymentStatus,
  Ramo,
  TypeDocumentProvider,
  StateFacture,
} from '../../models/interface/facturas.interface'
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableAgreemetsService } from '../../../service/table-agreements(facturas)/table-agreements.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styles: ``
})
export class FacturasComponent implements OnInit{

  public facturasForm = new FormGroup({
    id: new FormControl<string>(''),
    numberAccident: new FormControl<string>('', [Validators.required]),
    numberFactureAssigned: new FormControl<string>('', [Validators.required]),
    paymentStatus: new FormControl<string>('', [Validators.required]),
    ramo: new FormControl<string>('', [Validators.required]),
    agreementNumber: new FormControl<string>('', [Validators.required]),
    branch: new FormControl<string>('', [Validators.required]),
    typeDocumentProvider: new FormControl<string>('', [Validators.required]),
    numberIdentification: new FormControl<string>('', [Validators.required]),
    stateFacture: new FormControl<string>('', [Validators.required]),
    numberFactura: new FormControl<string>('', [Validators.required]),
    user: new FormControl<string>({ value: '', disabled: true }, [
      Validators.required,
    ]),
    dateEmisioninitial: new FormControl<string>('', [Validators.required]),
    dateEmisionEnd: new FormControl<string>('', [Validators.required]),
    dateRegisterInitial: new FormControl<string>('', [Validators.required]),
    dateRegisterEnd: new FormControl<string>('', [Validators.required]),
    dateReceptionInitial: new FormControl<string>('', [Validators.required]),
    dateReceptionEnd: new FormControl<string>('', [Validators.required]),
    datePayInitial: new FormControl<string>('', [Validators.required]),
    datePayEnd: new FormControl<string>('', [Validators.required]),
  });

  //Variable para el spinner
  loading: boolean = true;

  constructor(
    private tableAgreemetsService: TableAgreemetsService,
    private router: Router, 
    private cdr: ChangeDetectorRef
  ){}

  
  facturas!: Facturas[];
  allFacturas: any[] = [];



  //Dropdowns
  public paymentStatus: PaymentStatus[] | undefined=[];
  public ramo: Ramo[] | undefined=[];
  public typeDocumentProvider: TypeDocumentProvider[] | undefined=[];
  public stateFacture: StateFacture[] | undefined=[];



  ngOnInit(): void {

    this.tableAgreemetsService.getData().then((data) => {
      console.log('Datos cargados',data);
      if(data){
        this.allFacturas = data;
        this.facturas = [...this.facturas];
      }else{
        console.error('No se pudieron cargar los valores');
      }

    });

    setTimeout(() => {
      this.loading = false;
    }, 1000);

    this.initializeDropdowns();

      
  }

  //Dropdowns Facturas
  initializeDropdowns(){
    this.ramo = [
      { ramo: 'ARL'},
      { ramo: 'SALUD'},
      { ramo: 'SOAT'},
      { ramo: 'AP'},
    ];

    this.stateFacture = [
      { status: 'ANULADA' },
      { status: 'DEVUELTA'},
      { status: 'INCONSISTENTE'},
      { status: 'RADICADA'},
      { status: 'EN RECONSIDERACION'},
      { status: 'ENVIADA_PAGO'},
      { status: 'PAGADA'},
    ];

    this.typeDocumentProvider = [
      { document: 'Cedula de Ciudadania' },
      { document: 'NIT' },
      { document: 'DNI' },
      { document: 'PASAPORTE' },
    ];

    this.paymentStatus = [
      { status: ' '},
    ]
  }

  onSubmit() {
    if (this.facturasForm.valid) {
      console.log(this.facturasForm.value);
    } else {
      console.log('Formulario no valido');
    }
  }


  onSearch(){
    const formValues = this.facturasForm.value;
    console.log('Valores del formulario', formValues);

    //Si hay algun campo lleno
    const isAnyField = Object.values(formValues).some((value) => value);
    console.log('Hay algo lleno?', isAnyField);

    if (!isAnyField) {
      this.facturas = [...this.allFacturas];
      this.cdr.detectChanges();
      return;
    }
    // Filtrar proveedores basado en los valores ingresados
    this.facturas = this.allFacturas.filter((facturas) => {

      //TO-DO VERIFICAR QUE OTROS CAMPOS SON NECESARIOS PARA EL FILTRO

      // Comprobar cada condición y mostrar en la consola
      const matches = {
        numberAgreement:
          !formValues.numberAccident ||
          facturas.numberAccident === formValues.numberAccident,
        numberFactureAssigned:
          !formValues.numberFactureAssigned ||
          facturas.numberFactureAssigned === formValues.numberFactureAssigned,
        ramo:
          !formValues.ramo ||
          facturas.ramo === formValues.ramo,
        paymentStatus:
          !formValues.paymentStatus ||
          facturas.numberAuditoria === formValues.paymentStatus,
        agreementNumber:
          !formValues.agreementNumber ||
          facturas.agreementNumber === formValues.agreementNumber,
        branch: 
          !formValues.branch || facturas.city === formValues.branch,
        typeDocumentProvider:
          !formValues.typeDocumentProvider ||
          facturas.typeDocumentProvider === formValues.typeDocumentProvider,
        numberIdentification:
          !formValues.numberIdentification ||
          facturas.numberIdentification === formValues.numberIdentification,
        stateFacture:
          !formValues.stateFacture ||
          facturas.stateFacture === formValues.stateFacture,
        numberFactura:
          !formValues.numberFactura ||
          facturas.numberFactura === formValues.numberFactura,
        numberAccident:
          !formValues.numberAccident ||
          facturas.numberAccident === formValues.numberAccident,

        // state:
        //   !formValues.state ||
        //   auditorias.state
        //     .toLowerCase()
        //     .includes(formValues.state.toLowerCase()),
        //  typeDocument: !formValues.typeDocument || proveedor.typeDocument === formValues.typeDocument,
        // numberDocument: !formValues.numberDocument || proveedor.numberDocument === formValues.numberDocument,
      };

      // Log para ver si el proveedor coincide con los criterios
      console.log('Evaluando convenios:', facturas);
      console.log('Coincide con formulario?', matches);

      // Retornar true si todas las condiciones se cumplen
      return Object.values(matches).every((condition) => condition);
    });

    console.log('Convenios filtrados:', this.facturas);

    this.cdr.detectChanges();

  }

  clearForm(){
    this.facturasForm.reset(); //Limpia el formulario
  }

}
