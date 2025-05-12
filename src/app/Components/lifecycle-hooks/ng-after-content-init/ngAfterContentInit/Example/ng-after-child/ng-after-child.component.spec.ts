import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterChildComponent } from './ng-after-child.component';

describe('NgAfterChildComponent', () => {
  let component: NgAfterChildComponent;
  let fixture: ComponentFixture<NgAfterChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgAfterChildComponent]
    });
    fixture = TestBed.createComponent(NgAfterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
