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
        items: [
          {
            label: 'Proveedores',
            icon: 'pi pi-clipboard',
            routerLink:['/proveedores'],
          },
          {
            label: 'Convenios',
            icon: 'pi pi-file-edit',
            routerLink: ['/convenios'],
          },
          {
            label: 'Autorizaciones',
            icon: 'pi pi-unlock',
            routerLink: ['/autorizaciones'],
          },
          {
            label: 'Facturas',
            icon: 'pi pi-book',
            routerLink: ['/facturas'],
          },

          {
            label: 'Auditorias',
            icon: 'pi pi-check-square',
            routerLink: ['/auditorias'],
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
        label: 'roles',
        icon: 'pi pi-lock',
        routerLink: ['/roles'],
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
