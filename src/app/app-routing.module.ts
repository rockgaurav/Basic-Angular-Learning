import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './Components/angular/angular.component';

// Lifecycle Hooks imports
import { LifecycleHooksComponent } from './Components/lifecycle-hooks/lifecycle-hooks.component';
import { NgOnInitComponent } from './Components/lifecycle-hooks/ng-on-init/ng-on-init.component';
import { NgOnChangesComponent } from './Components/lifecycle-hooks/ng-on-changes/ng-on-changes.component';
import { NgDoCheckComponent } from './Components/lifecycle-hooks/ng-do-check/ng-do-check.component';
import { NgAfterContentInitComponent } from './Components/lifecycle-hooks/ng-after-content-init/ng-after-content-init.component';
import { NgAfterViewInitComponent } from './Components/lifecycle-hooks/ng-after-view-init/ng-after-view-init.component';
import { NgAfterViewCheckedComponent } from './Components/lifecycle-hooks/ng-after-view-checked/ng-after-view-checked.component';
import { NgOnDestroyComponent } from './Components/lifecycle-hooks/ng-on-destroy/ng-on-destroy.component';

const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'hooks', component: LifecycleHooksComponent },
  { path: 'ngOnInit', component: NgOnInitComponent },
  { path: 'ngOnChanges', component: NgOnChangesComponent },
  { path: 'ngDoCheck', component: NgDoCheckComponent },
  { path: 'ngAfterContentInit', component: NgAfterContentInitComponent },
  { path: 'ngAfterViewInit', component: NgAfterViewInitComponent },
  { path: 'ngAfterViewChecked', component: NgAfterViewCheckedComponent },
  { path: 'ngOnDestroy', component: NgOnDestroyComponent },

  // Lazy loading the Lifecycle hooks module
  { path: 'parent', loadChildren: () => import('./modules/lifecycle/parent/parent.module').then(m => m.ParentModule) },
  { path: 'child', loadChildren: () => import('./modules/lifecycle/child/child.module').then(m => m.ChildModule) },

  // Lazy Loading for ngAfterContentInit
  { path: 'ngAfterParent', loadChildren: () => import('./modules/lifecycle/ngAfterContentInit/ng-after-parent/ng-after-parent.module').then(m => m.NgAfterParentModule) },
  { path: 'ngAfterChild', loadChildren: () => import('./modules/lifecycle/ngAfterContentInit/ng-after-child/ng-after-child.module').then(m => m.NgAfterChildModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
