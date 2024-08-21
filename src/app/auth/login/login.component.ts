import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../service/authService/auth-service.service'
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'infoSalud-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Validación para email
      password: ['', [Validators.required, Validators.minLength(6)]] // Mínimo 6 caracteres
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.authService.login(username, password)) {
        this.loginError = null;
        this.router.navigate(['/home']);
      } else {
        this.loginError = 'Login fallo. Por favor, verifique sus credenciales.';
      }
    }else{
      this.loginForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

