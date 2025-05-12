import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangesComponent } from './ng-on-changes.component';

describe('NgOnChangesComponent', () => {
  let component: NgOnChangesComponent;
  let fixture: ComponentFixture<NgOnChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnChangesComponent]
    });
    fixture = TestBed.createComponent(NgOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
