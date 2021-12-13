import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {FormControl, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  getuser = new FormGroup(
    {
            emailId : new FormControl('',[Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
            password: new FormControl('',[Validators.required])
    }
);
  constructor(private User:UserService) { }

  ngOnInit(): void {
  }

  userprofile() {
    this.User.userlogin( this.getuser.controls['emailId'],  this.getuser.controls['password']);
  }
}
