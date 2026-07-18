import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { FeatureModule } from "./feature/feature-module";


@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FeatureModule
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
