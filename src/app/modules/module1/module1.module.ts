import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Module1RoutingModule} from './module1-routing.module';
import {Component1Component} from './components/component1/component1.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    // Module1 uses Component1Component, so import CoreModule
    // which in turn makes exported components from CoreModule accessible in this module
    CoreModule
  ],
  declarations: [Component1Component]
})
export class Module1Module {
}
