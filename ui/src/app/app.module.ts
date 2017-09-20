import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorNavBarComponent } from './hor-nav-bar/hor-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HorNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
