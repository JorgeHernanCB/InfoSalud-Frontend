import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Username } from '../../interface/username.interface';

@Component({
  selector: 'infoSalud-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    @Output()
    public onNewUsername: EventEmitter<Username> = new EventEmitter();

    public username: Username = {
      username: '',
    };

    emitUsername(): void{
      this.onNewUsername.emit(this.username);
      this.username.username = '';
    }

    public password: Username = {
      password: '',
    };
    passForm: FormGroup = new FormGroup({});

    constructor(private formB: FormBuilder){
    this.makeForm();
    };
    makeForm(){
      this.passForm = this.formB.group({
        password: ['null',[Validators.required]]
      });
    }

  }

