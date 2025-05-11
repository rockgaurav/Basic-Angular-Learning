import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.css']
})
export class NgOnInitComponent implements OnInit{

    
  
  
  ngOnInit() {
    console.log('ngOnInit called');
      const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
    popovers.forEach((popover: any) => {
      new bootstrap.Popover(popover);
    });
    
  }


}
