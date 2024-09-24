import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ProveedoresService } from '../../../service/proveedores/proveedores.service';
import {Proveedores} from './../../../catalogueOfActivities/models/interface/proveedores.interface';

@Component({
  selector: 'app-filtered-button',
  templateUrl: './filtered-button.component.html',
  styleUrl: './filtered-button.component.css',
})
export class FilteredButtonComponent implements OnInit {

  @Output() onClear : EventEmitter<void> = new EventEmitter<void>();
  @Output() onSearch : EventEmitter<void> = new EventEmitter<void>();

  private proveedores: Proveedores[] = [];

  //TODO 1: Crear la conexion con el servicio de proveedores
  //constructor(private proveedoresService: ProveedoresService) {}

  //Dialogo del Upload
  displayUploadDialog: boolean = false;

  ngOnInit(){

  }

  //Search
  onSearchClick(){
    this.onSearch.emit()
  }

  //Clear
  onClearClick() {
    this.onClear.emit()
  }

  //Metodo para abrir el dialogo del Upload
  openUploadDialog() {
    this.displayUploadDialog = true;
  }
  //Metodo para el evento de Upload
  onUpload(event: any) {
    console.log('Archivo Subido',event.files);
  }
  //Metodo para cerrar el dialogo
  onDialogHide(){
    this.displayUploadDialog = false;
  }

}
