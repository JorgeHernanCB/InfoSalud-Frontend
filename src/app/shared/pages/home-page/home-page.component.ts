import { Component } from '@angular/core';
import { AuthService } from '../../../service/authService/auth-service.service';
@Component({
  selector: 'infoSalud-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
  }

}
