import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  items : MenuItem[] | any

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Bookings', icon: 'pi pi-fw pi-car'},
      {label: 'Users', icon: 'pi pi-fw pi-id-card'},
      {label: 'Comments', icon: 'pi pi-fw pi-comments'},
      {label: 'logout', icon: 'pi pi-fw pi-power-off'}
    ];
  }
}
