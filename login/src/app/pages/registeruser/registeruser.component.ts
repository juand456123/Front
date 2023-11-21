import { Component } from '@angular/core';
import { UsersService } from '../../Usuario/users.service';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrl: './registeruser.component.css'
})
export class RegisteruserComponent {
  Usuario: string;
  Pasword:string;
  Password:string;
  passwordError: boolean;

  constructor(public userServices : UsersService){}

  register() {
    const user = { Usuario: this.Usuario, Pasword: this.Pasword };
    this.userServices.register(user).subscribe(data => {
      console.log(data);
    });
  }
}
