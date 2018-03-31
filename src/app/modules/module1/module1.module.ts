import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Module1RoutingModule} from './module1-routing.module';
import {Component1Component} from './components/component1/component1.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    CoreModule
  ],
  declarations: [Component1Component]
})
export class Module1Module {
}
