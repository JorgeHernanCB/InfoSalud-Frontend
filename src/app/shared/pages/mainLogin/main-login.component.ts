import { Component } from '@angular/core';
import { UserService } from '../../../service/users/user.service';
<<<<<<< HEAD
import { Username } from '../../../admin/interface/username.interface';
=======
import { Username } from '../../../core/interface/username.interface';
>>>>>>> 7e32f43724d5decb59302ef8c28411ec88668c16

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
