import { Component } from '@angular/core';
//import { TypePerson, City, Deparment, TypeDocument, numberDocument } from '../../interface/proveedores.interface';
import { TableFoundService } from './../../../service/table-found/table-found.service';
import { proveedores } from '../../models/proveedores.interface';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})

export class ProveedoresComponent {

  proveedores!: proveedores [];

  constructor(private tableFoundService: TableFoundService) {}

  ngOnInit(): void {
    this.tableFoundService.getData().then((data)=> {
      this.proveedores = data;
    });
  }

}


