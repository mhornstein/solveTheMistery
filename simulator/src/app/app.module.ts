import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainSimulatorComponent } from './main-simulator/main-simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSimulatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainSimulatorComponent]
})
export class AppModule { }
