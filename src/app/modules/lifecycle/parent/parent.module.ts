import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParentComponent } from '../../../Components/lifecycle-hooks/ng-on-changes/Example/parent/parent.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ParentComponent }
    ])
  ]
})
export class ParentModule { }