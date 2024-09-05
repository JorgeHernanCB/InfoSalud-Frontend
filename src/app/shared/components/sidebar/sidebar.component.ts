import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'infoSalud-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public sidebarVisible: boolean = false;

  public itemsSidebar: MenuItem[] = [];

  ngOnInit() {
    this.itemsSidebar = [
      {
        label: 'Categ Servicios',
        icon: 'pi pi-home',
        routerLink: ['/home'],
        items: [
          {
            label: 'Proveedores',
            icon: 'pi pi-clipboard',
            routerLink:['/proveedores'],
            items: [
              {
                label: 'Información Básica',
                icon: 'pi pi',
                routerLink:['/proveedores/info-basica'],
              },
              {
                label:'caracteristicas',
                icon: 'pi pi',
                routerLink:['/proveedores/caracteristicas'],
              },
              {
                label:'Documentos',
                icon: 'pi pi',
                routerLink:['/proveedores/documentos'],
              },
              {
                label:'¿Marcas?',
                icon: 'pi pi',
              },
              {
                label:'Históricos',
                icon: 'pi pi',
              },
              {
                label:'Servicios Habilitados',
                icon: 'pi pi',
              },
              {
                label:'Seguimientos',
                icon: 'pi pi',
              },
            ]
          },
          {
            label: 'Convenios',
            icon: 'pi pi-file-edit',
            routerLink: ['/convenios'],
            items: [
              {
               label: 'Información Básica',
               icon: 'pi pi',
              },
              {
                label: 'Caracteristicas',
                icon: 'pi pi',
               },
               {
                label: 'Tarifas',
                icon: 'pi pi',
               }
            ]
          },
          {
            label: 'Autorizaciones',
            icon: 'pi pi-unlock',
          },
          {
            label: 'Facturas',
            icon: 'pi pi-book',
          },

          {
            label: 'Auditorias',
            icon: 'pi pi-check-square',
          },
        ],
      },
      {
        label: 'Administración',
        icon: 'pi pi-users',
        // routerLink: [''],
        items: [
          {
            label: 'Perfil',
            icon: 'pi pi',
            routerLink: ['/administracion/perfil'],
          },
          {
            label: 'Parametros',
            icon: 'pi pi',
            routerLink: ['/administracion/parametros'],
          },
          {
            label: 'Seguridad',
            icon: 'pi pi',
            routerLink: ['/administracion/seguridad'],
          },
          {
            label: 'Notificaciones',
            icon: 'pi pi',
            //routerLink: [],
          },
          {
            label: 'Reglas de Validación',
            icon: 'pi pi',
          },
          {
            label: 'Masivos',
            icon: 'pi pi',
          },
        ],
      },
      {
        label: 'Proveedores',
        icon: 'pi pi-lock',
        routerLink: ['/roles'],
      },
      {
        label: 'Convenios',
      },
    ];
  }
  ngAfterViewInit() {
    const sidebar = document.getElementById('sidebar');
    const menuSidebar: any = document.getElementById('menusidebar');

    if (sidebar) {
      sidebar.onclick = () => {
        sidebar?.classList.toggle('active');
      };
    }
  }
}
