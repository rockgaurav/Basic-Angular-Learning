import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgAfterParentComponent } from 'src/app/Components/lifecycle-hooks/ng-after-content-init/ngAfterContentInit/Example/ng-after-parent/ng-after-parent.component';

const routes: Routes = [
  { path: 'ngAfterParent', component: NgAfterParentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgAfterParentRoutingModule { }
