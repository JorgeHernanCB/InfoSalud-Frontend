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
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: ['/home'],
        items: [
          {
            label: 'Proveedores',
            icon: 'pi pi',
            routerLink: ['/proveedores'],
          },
          {
            label: 'Convenios',
            icon: 'pi pi',
            routerLink: ['/convenios'],
          },
          {
            label: 'Autorizaciones',
            icon: 'pi pi',
          },
          {
            label: 'Facturas',
            icon: 'pi pi',
          },
          {
            label: 'Auditorias',
            icon: 'pi pi',
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
            routerLink: ['/home/pagina1'],
          },
          {
            label: 'Parametros',
            icon: 'pi pi',
          },
          {
            label: 'Seguridad',
            icon: 'pi pi',
          },
          {
            label: 'Reglas de Validación',
            icon: 'pi pi',
          },
          {
            label: 'Masivos',
            icon: 'pi pi',
          },
          {
            label: 'Notificaciones',
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
