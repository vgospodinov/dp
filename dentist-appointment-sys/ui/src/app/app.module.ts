import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TestComponent} from './components/test.component';
import {TestService} from "./services/test.service";
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    RouterModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [ TestComponent ]
})
export class AppModule { }
