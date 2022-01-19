import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {UserService} from "./user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JAI-HANUMAN-TRAVELS';
  items: MenuItem[] | any;

  activeItem: MenuItem | any;
  isVisible: any;

  constructor(private User: UserService) {
  }

  ngOnInit(): void {

    this.items = [
      {label: 'Jai Hanuman Travels', routerLink: ['login']},
      {label: 'book', icon: 'pi pi-fw pi-car', routerLink: ['booking']},
      {label: 'New User', icon: 'pi pi-fw pi-user-plus', routerLink: ['register']},
      {label: 'Contact Us', icon: 'pi pi-fw pi-phone', routerLink: ['contactUs']},
      {label: 'Admin', icon: 'pi pi-fw pi-user', routerLink: ['adminLogin']}
    ];

    this.activeItem = this.items[0];

  }

}
