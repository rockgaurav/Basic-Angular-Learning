import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterViewInitComponent } from './ng-after-view-init.component';

describe('NgAfterViewInitComponent', () => {
  let component: NgAfterViewInitComponent;
  let fixture: ComponentFixture<NgAfterViewInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgAfterViewInitComponent]
    });
    fixture = TestBed.createComponent(NgAfterViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
