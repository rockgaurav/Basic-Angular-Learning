import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-after-child',
  templateUrl: './ng-after-child.component.html',
  styleUrls: ['./ng-after-child.component.css']
})
export class NgAfterChildComponent implements AfterContentInit {

  @ContentChild('projectedContent') content!: ElementRef;

  ngAfterContentInit() {
    console.log('📦 Projected content initialized:', this.content.nativeElement.textContent);
  }
}  
