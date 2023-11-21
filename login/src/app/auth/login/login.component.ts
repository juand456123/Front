import { Component } from '@angular/core';
import { UsersService } from '../../Usuario/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
Usuario : string;
Password : string;
PassWord : String;


  constructor(public userServices : UsersService){}

    LogIn() {
    const login = { Usuario: this.Usuario,  Password: this.Password };
    this.userServices.login(login).subscribe(data => {
      console.log(data);
    });
  }
}
