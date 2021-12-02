import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bokking',
  templateUrl: './bokking.component.html',
  styleUrls: ['./bokking.component.css']
})
export class BokkingComponent implements OnInit {
  selectedCategory: any = null;
  categories: any[] = [{name: 'OutstationOne-way'}, {name: 'OutstationRound trip'}];
  tripFlag: any;
   date1: Date | undefined;

  constructor() {
  }
  ngOnInit(): void {
    this.selectedCategory = this.categories[0];

  }

  public radioChangeHandler(type: string): void {
    console.log('type is    ', type);
    this.tripFlag = type === 'trip';
  }
}
