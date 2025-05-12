import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() userId!: number;
  

  ngOnChanges(changes: SimpleChanges) {
   if(changes['userId']) {
    const currentValue = changes['userId'].currentValue;
    console.log(`User ID changed to: ${currentValue}`);
    const fetchUserData = this.fetchUserData(currentValue);
    console.log(`Fetched user data: ${fetchUserData}`);
   }
  }

  fetchUserData(userId: number) {
    console.log(`Fetching data for user ID: ${userId}`);
   }



}
