import { HelloWordService } from './../../service/hello-word/hello-word.service';
import { Component, OnInit } from '@angular/core';
//Forms
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrl: './hello-word.component.css'
})
export class HelloWordComponent implements OnInit {

 public helloMessage: String = '';

 //Se crea el formulario
 userForm: FormGroup;
 users: { name: string; age: number }[] = [];

constructor( private HelloWordService: HelloWordService) {

  //Se agrega el form
  this.userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(1)]) //Se realiza validacion de que sea minimo 1
  });
}

ngOnInit(): void {
  this.getHelloWord();
}
getHelloWord(): void {
  this.HelloWordService.getHelloWord().subscribe(
    data => {
      this.helloMessage = data;
    },
    error => {
      console.error(error);
    }
  );
}

//Funcion para agregar usuario
addUser() { 
  if (this.userForm.valid) {
    this.users.push(this.userForm.value); //Lo agrega a la tabla
    this.userForm.reset();
  }
}

}
