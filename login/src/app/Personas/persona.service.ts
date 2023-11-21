import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Personas } from '../model/Personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient ) {}

  register(persona: Personas){

    return this.http.post<any>("https://localhost:44367/api/Personas", persona);
  }
}
