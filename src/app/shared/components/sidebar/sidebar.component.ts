import { Component, NgModule, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'infoSalud-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public sidebarVisible: boolean = false;

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/home'
    },
    {
      label: 'Services',
      icon: 'pi pi-cog',
      items: [
        { label: 'Web Design', routerLink: '/services/web-design' },
        { label: 'SEO', routerLink: '/services/seo' },
        { label: 'Marketing', routerLink: '/services/marketing' }
      ]
    },
    {
      label: 'About',
      icon: 'pi pi-info',
      items: [
        { label: 'Our Team', routerLink: '/about/team' },
        { label: 'Our Mission', routerLink: '/about/mission' }
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: '/contact'
    }
  ];

  activeSubmenu: MenuItem | null = null;

  toggleSubmenu(item: MenuItem) {
    if (this.activeSubmenu === item) {
      this.activeSubmenu = null;
    } else {
      this.activeSubmenu = item;
    }
  }

  isSubmenuActive(item: MenuItem): boolean {
    return this.activeSubmenu === item;
  }

}
