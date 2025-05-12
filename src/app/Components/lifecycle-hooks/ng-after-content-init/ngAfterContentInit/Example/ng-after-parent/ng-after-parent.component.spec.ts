import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterParentComponent } from './ng-after-parent.component';

describe('NgAfterParentComponent', () => {
  let component: NgAfterParentComponent;
  let fixture: ComponentFixture<NgAfterParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgAfterParentComponent]
    });
    fixture = TestBed.createComponent(NgAfterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
