import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './Components/lifecycle-hooks/lifecycle-hooks.component';
import { AngularComponent } from './Components/angular/angular.component';
import { NgOnInitComponent } from './Components/lifecycle-hooks/ng-on-init/ng-on-init.component';
import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    AngularComponent,
    NgOnInitComponent
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
