import { Component } from '@angular/core';
import { UserService } from '../../../service/users/user.service';
import { Username } from '../../../catalogueOfActivities/models/interface/username.interface';

@Component({
  selector: 'infoSalud-main-login',
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.css'
})

export class MainLoginComponent {

  title = 'infoSalud';


  constructor(private UserService: UserService ) {}

  get username(): Username[]{
    return [...this.UserService.username];
  }

  onNewUsername(username: Username): void{
    this.UserService.addUser(username);
  }



}
