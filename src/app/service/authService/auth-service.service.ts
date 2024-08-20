import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    // Aquí va la lógica para comprobar si el usuario está autenticado.
    // Por ejemplo, verificando si hay un token guardado en localStorage.
    return !!localStorage.getItem('auth_token');
  }

  login(username: string, password: string): boolean {
    // Lógica de login, probablemente llamada a un API.
    // Si es exitoso, guardar el token en localStorage.
    localStorage.setItem('auth_token', 'dummy_token');
    return true;
  }

  logout(): void {
    // Eliminar el token de autenticación
    localStorage.removeItem('auth_token');
    // Redirigir al usuario a la página de login
    this.router.navigate(['/login']);
  }
}