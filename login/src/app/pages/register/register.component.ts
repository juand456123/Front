import { Component } from '@angular/core';
import { Personas } from '../../model/Personas';
import { PersonaService } from '../../Personas/persona.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Nombres : string;
  Apellidos: string;
  TipoIdentificacion :string = "0";
  NumeroIdentificacion : string;
  Email:string;

  constructor(public personaServices : PersonaService){}

  register() {
    const persona = {
      Nombres: this.Nombres, 
      Apellidos: this.Apellidos , 
      TipoIdentificacion : this.TipoIdentificacion ,
      NumeroIdentificacion : this.NumeroIdentificacion,
      Email: this.Email
     };
    this.personaServices.register(persona).subscribe(data => {
      console.log(data);
    });
  }
}
