import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from '../model/Usuario';
import { login } from '../model/login';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient ) {}

  register(usuario: Usuario){

    return this.http.post<any>("https://localhost:44367/api/Usuario", usuario);
  }

  login(lg : login){
    return this.http.get<any>("https://localhost:44367/api/Usuario",{ 
      params: {
        usuario: lg.Usuario,
        password: lg.Password
  }});
  }

}
