import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {UserModel} from "../helpers/usermodel";


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  newuser = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z ]*$')]),
      emailId: new FormControl('', [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      phoneNo: new FormControl('', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)]),
      cpassword: new FormControl('', [Validators.required])
    });


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  collectuser() {
    if (this.newuser.valid) {
      console.log(1)
      const user: UserModel = {
        email: this.newuser.get('emailId')?.value,
        password: this.newuser.get('password')?.value,
        firstName:this.newuser.get('firstName')?.value,
        lastName:this.newuser.get('lastName')?.value,
        phoneNo:this.newuser.get('phoneNo')?.value
      }
      this.userService.saveNewuser(user).subscribe((res) => {
        console.log('saveNewuser    ', res)
        this.router.navigate([`/login`]).then(r => {
          if (r) {
            alert("you register successfully" + "/n" + " please login with your Emailid and Password")
          }
        });
      });
    } else {
      alert("please fill all requires")
    }
  }

  private getUsers(): void {
    this.userService.getList().subscribe(res => {
      console.log('Response is    ', res);
    })
  }
}


