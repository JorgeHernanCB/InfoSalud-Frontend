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
            label: 'pagina1',
            icon: 'pi pi',
            routerLink: ['/home/pagina1'],
          },
          {
            label: 'pagina2',
            icon: 'pi pi',
          },
          {
            label: 'pagina3',
            icon: 'pi pi',
          },
        ],
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-users',
        routerLink: ['/users'],
      },
      {
        label: 'Roles',
        icon: 'pi pi-lock',
        routerLink: ['/roles'],
      },
      {
        label: 'Permisos',
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
