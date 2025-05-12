import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from 'src/app/Components/lifecycle-hooks/ng-on-changes/Example/child/child.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ChildComponent } // Default route for this module
    ])
  ]
})
export class ChildRoutingModule { }
