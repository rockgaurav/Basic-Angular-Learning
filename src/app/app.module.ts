import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './Components/lifecycle-hooks/lifecycle-hooks.component';
import { AngularComponent } from './Components/angular/angular.component';
import { NgOnInitComponent } from './Components/lifecycle-hooks/ng-on-init/ng-on-init.component';
import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOnChangesComponent } from './Components/lifecycle-hooks/ng-on-changes/ng-on-changes.component';
import { ParentComponent } from './Components/lifecycle-hooks/ng-on-changes/Example/parent/parent.component';
import { ChildComponent } from './Components/lifecycle-hooks/ng-on-changes/Example/child/child.component';
import { NgDoCheckComponent } from './Components/lifecycle-hooks/ng-do-check/ng-do-check.component';
import { NgAfterContentInitComponent } from './Components/lifecycle-hooks/ng-after-content-init/ng-after-content-init.component';
import { NgAfterParentComponent } from './Components/lifecycle-hooks/ng-after-content-init/ngAfterContentInit/Example/ng-after-parent/ng-after-parent.component';
import { NgAfterChildComponent } from './Components/lifecycle-hooks/ng-after-content-init/ngAfterContentInit/Example/ng-after-child/ng-after-child.component';
import { NgAfterViewInitComponent } from './Components/lifecycle-hooks/ng-after-view-init/ng-after-view-init.component';
import { NgAfterViewCheckedComponent } from './Components/lifecycle-hooks/ng-after-view-checked/ng-after-view-checked.component';
import { NgOnDestroyComponent } from './Components/lifecycle-hooks/ng-on-destroy/ng-on-destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    AngularComponent,
    NgOnInitComponent,
    NgOnChangesComponent,
    ParentComponent,
    ChildComponent,
    NgDoCheckComponent,
    NgAfterContentInitComponent,
    NgAfterParentComponent,
    NgAfterChildComponent,
    NgAfterViewInitComponent,
    NgAfterViewCheckedComponent,
    NgOnDestroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
