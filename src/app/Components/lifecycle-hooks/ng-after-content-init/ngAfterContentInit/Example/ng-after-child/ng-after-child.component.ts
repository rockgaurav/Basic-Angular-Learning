import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-ng-after-child',
  templateUrl: './ng-after-child.component.html',
  styleUrls: ['./ng-after-child.component.css'],
})
export class NgAfterChildComponent implements AfterContentInit {
  
@ContentChild('projectedContent') content!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}  // ChangeDetectorRef is injected to manually trigger change detection

  ngAfterContentInit() {
    if (this.content) {
      console.log('📦 Projected content initialized:', this.content.nativeElement.textContent);
      this.cdr.detectChanges(); // Trigger change detection
    } else {
      console.error('❌ Projected content not found!');
    }
  }
}
