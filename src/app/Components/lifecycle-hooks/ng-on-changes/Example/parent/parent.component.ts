import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

selectedUserId = 1;

 changeUserId() {
    this.selectedUserId = Math.floor(Math.random() * 100) + 1;
  }
  
}
