import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lifecycle Hooks import
import { ParentComponent } from 'src/app/Components/lifecycle-hooks/ng-on-changes/Example/parent/parent.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
