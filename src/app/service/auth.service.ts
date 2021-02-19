import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserModel } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiKey = "AIzaSyBCb164hDU9h36r1qqasOyhb0nea4Wasrc";
  private userToken: string;


  constructor(private http: HttpClient) {
    //this.getToken();
  }

  login(){

  }

  singUp (user: UserModel){
    const userData = {
      ...user,
      returnSecureToken: true
    }
  }
}

/*
get -> read/ -Obtener informacion
post -> create/ - Crear información
put -> create/update - Crear/Actualizar información
patch -> update/ actualizar una propiedad
delete -> delete/ borrar información
*/
