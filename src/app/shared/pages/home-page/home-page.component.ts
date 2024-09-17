import { Component } from '@angular/core';
import { AuthService } from '../../../service/authService/auth-service.service';
@Component({
  selector: 'infoSalud-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  //Variable para el spinner
  loading: boolean = true;

  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
