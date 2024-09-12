import { Component, HostListener, OnInit } from '@angular/core';
import { ProveedoresService } from '../../../service/proveedores/proveedores.service';
import {Proveedores} from './../../../catalogueOfActivities/models/interface/proveedores.interface';

@Component({
  selector: 'app-filtered-button',
  templateUrl: './filtered-button.component.html',
  styleUrl: './filtered-button.component.css',
})
export class FilteredButtonComponent implements OnInit {

  private proveedores: Proveedores[] = [];

  //TODO 1: Crear la conexion con el servicio de proveedores
  //constructor(private proveedoresService: ProveedoresService) {}

  ngOnInit(){
    this.detectScreenSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.detectScreenSize(event.target.innerWidth); //Function
  }

  // For responsive
  isExtraLargeScreen = false; //width: 1060px
  isLargeScreen = false //with: 900px
  isMediumScreen = false // width: 740px
  isSmallScreen = false; //width: 460px
  isExtraSmallScreen = false //width: < 460px

  //Function
  private detectScreenSize(width: number){
    this.isExtraLargeScreen = width > 1100;
    this.isLargeScreen = width > 850 && width <= 1100;
    this.isMediumScreen = width > 700 && width <= 850;
    this.isSmallScreen = width > 550 && width <= 700;
    this.isExtraSmallScreen = width <= 550;
  }

}
