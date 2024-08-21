import { Component, NgModule, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'infoSalud-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public sidebarVisible: boolean = false;

}
