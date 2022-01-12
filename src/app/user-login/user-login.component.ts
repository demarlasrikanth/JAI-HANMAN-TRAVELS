import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginUser = new FormGroup(
    {
      email: new FormControl('', [Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      password: new FormControl('', [Validators.required])
    });


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  doLogin() {
    if (this.loginUser.valid) {
      console.log(this.loginUser.value)
      this.userService.login(this.loginUser.value)
    }
  }
}

