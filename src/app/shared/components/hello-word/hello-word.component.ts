import { HelloWordService } from '../../../service/hello-word/hello-word.service';
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
 //users: { name: string; age: number }[] = [];
 users: any[] = [];

constructor( private HelloWordService: HelloWordService) {

  //Se agrega el form
  this.userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(1)]) //Se realiza validacion de que sea minimo 1
  });
}

ngOnInit(): void {
  this.getHelloWord();
  this.loadUsers(); //Cargar los usuarios
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
    //this.users.push(this.userForm.value); //Lo agrega a la tabla
    //this.userForm.reset();
    this.HelloWordService.addUser(this.userForm.value).subscribe(
      (Response) => {
          console.log('Usuario agregado', Response);

          this.loadUsers();
          this.userForm.reset()
      },
      (error) => {
        console.error('Error al agregar el usuario', error);
      }
    );
  }
}

//Cargar usuarios
loadUsers(){
  this.HelloWordService.getUsers().subscribe(
    (data) => {
      this.users = data;
    },
    (error) => {
      console.error('Error al cargar los usuarios', error);
    }
  );
}

}
