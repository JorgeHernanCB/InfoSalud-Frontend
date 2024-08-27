import { Component, numberAttribute, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'infoSalud-business-card',
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css',
  // standalone: true,
  // imports: [FormsModule, InputTextModule]
})
export class BusinessCardComponent implements OnInit{
  proveedorsForm: FormGroup;
  value: string | undefined;

  constructor(private fb: FormBuilder){
    this.proveedorsForm = this.fb.group({
      //Se definen los valores del formulario
      // Ej: name: ['', Validators.required]
      name: ['',Validators.required],
      codigo: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.proveedorsForm.valid){
      console.log(this.proveedorsForm.value);
    }else{
      console.log('Formulario no valido');
    }
  }
}
