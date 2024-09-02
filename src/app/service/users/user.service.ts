import { Injectable } from '@angular/core';
import { Username } from '../../catalogueOfActivities/models/interface/username.interface';

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
