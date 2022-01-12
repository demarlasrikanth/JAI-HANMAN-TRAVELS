import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {
  item: any;

  constructor(private User: UserService) { }

  ngOnInit(): void {
    this.User.getList().subscribe((r)=>{
      this.item=r
    });

  }

}
