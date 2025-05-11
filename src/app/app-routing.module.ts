import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleHooksComponent } from './Components/lifecycle-hooks/lifecycle-hooks.component';
import { AngularComponent } from './Components/angular/angular.component';

const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'hooks', component: LifecycleHooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
