import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  getadmin= new FormGroup(
    {
      emailId : new FormControl('',[Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      password: new FormControl('',[Validators.required])
    });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  dashboard() {
    let emailId = this.getadmin.controls['emailId'].value
    let password = this.getadmin.controls['password'].value
    if(emailId=="hanumantravels@gmail.com" && password=="hanuman@travels")
    {
      this.router.navigate([`/dashboard`]).then((r) =>{
        if(r = true){
          alert("login successfully");
        }
        else {
          alert("please check your EmailId & password!")
        }

      } )

    }
  }
}
