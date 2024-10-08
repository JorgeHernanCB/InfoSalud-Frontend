import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../service/authService/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.AuthService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}