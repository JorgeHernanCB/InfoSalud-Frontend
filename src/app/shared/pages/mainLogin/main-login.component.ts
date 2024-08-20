import { Component } from '@angular/core';
import { UserService } from '../../../service/users/user.service';
import { Username } from '../../../interface/username.interface';

@Component({
  selector: 'infoSalud-main-login',
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.css'
})

export class MainLoginComponent {

  title = 'infoSalud';

  /*
  Constructor(private UserService: UserService ) {}

  get username(): Username[]{
    return [...this.UserService.username];
  }

  onNewUsername(username: Username): void{
  }
   */


}
