import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: any = {};

  constructor(private User: UserService, private routed: ActivatedRoute, private router: Router) {
    let id = this.routed.snapshot.paramMap.get('id');
    this.User.getUserProfile(id).subscribe(r => {
      this.currentUser = r;
    })

  }

  ngOnInit(): void {

  }


  logout() {
    this.User.doLogout()
  }
}
