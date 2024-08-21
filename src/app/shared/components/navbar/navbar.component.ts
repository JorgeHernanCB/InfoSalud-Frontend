import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../service/authService/auth-service.service';

@Component({
  selector: 'infoSalud-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public MenuLogin: MenuItem[] = [];

    ngOnInit() {
      this.MenuLogin = [

      {
        label: '',
        icon: 'pi pi-fw pi-home',
        items: [
          {
            label: 'pagina1',
            icon: 'pi pi',
          },
          {
            label: 'pagina2',
            icon: 'pi',
          },
          {
            label: 'pagina2',
            icon: 'pi',
          },
          {
            label: 'pagina2',
            icon: 'pi',
          },
          {
            label: 'pagina2',
            icon: 'pi',
          },
          {
            label: 'pagina2',
            icon: 'pi pi-wrench',
          },

        ]
      },

    ];
  }

}
