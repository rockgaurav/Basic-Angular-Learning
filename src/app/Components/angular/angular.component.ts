import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {

  constructor(private router: Router) { }

   lifeCycleHooks() {
    console.log('Life Cycle Hooks');
    this.router.navigate(['hooks']);
  }

}
