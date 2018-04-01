import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Module1RoutingModule} from './module1-routing.module';
import {Component1Component} from './components/component1/component1.component';
import {CoreModule} from '../core/core.module';
import {Service1Service} from './services/service1.service';
import { Component4Component } from './components/component4/component4.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    // Module1 uses Component1Component, so import CoreModule
    // which in turn makes exported components from CoreModule accessible in this module
    CoreModule
  ],
  declarations: [Component1Component, Component4Component],
  providers: [
    // Services in feature modules should be used outside this module
    Service1Service
  ]
})
export class Module1Module {
}
