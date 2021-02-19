import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {
  }

  sendData(form: NgForm) {
    console.log("formlario", form)
    console.log("Usuario", this.user)
  }
}
