import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Username } from '../../admin/interface/username.interface';
=======
import { Username } from '../../core/interface/username.interface';
>>>>>>> 7e32f43724d5decb59302ef8c28411ec88668c16

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public username: Username[] = []

  addUser(username: Username): void{
    const newUSer: Username = {
      ...username
    }
  }
}
