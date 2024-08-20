import { Injectable } from '@angular/core';
import { Username } from '../../interface/username.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(Username: Username): void{
    const newUSer: Username = {
      ...Username
    }
  }
}
