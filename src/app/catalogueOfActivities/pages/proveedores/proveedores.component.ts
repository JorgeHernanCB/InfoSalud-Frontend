import { Component, OnInit } from '@angular/core';
import { TableFoundService } from './../../../service/table-found/table-found.service';
import { proveedores } from '../../models/proveedores.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//Components

@Component({
  selector: 'infoSalud-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css',
})

export class ProveedoresComponent implements OnInit {
  proveedorsForm: FormGroup;
  value: string | undefined;

  proveedores!: proveedores [];


  constructor(
    private fb: FormBuilder,
    private tableFoundService: TableFoundService
  ){
    this.proveedorsForm = this.fb.group({
      //Se definen los valores del formulario
      name: ['',Validators.required],
      codigo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.tableFoundService.getData().then((data)=> {
      this.proveedores = data;
    });
  }

  onSubmit() {
    if (this.proveedorsForm.valid){
      console.log(this.proveedorsForm.value);
    }else{
      console.log('Formulario no valido');
    }
  }

}


