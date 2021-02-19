import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {
  }

  sendData(form: NgForm){
    console.log("formlario", form)
    console.log("usuario", this.user)
  }

  cancelEdit(){
    debugger
    alert(1);
  }
}
