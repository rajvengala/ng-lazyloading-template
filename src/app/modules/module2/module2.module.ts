import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Component2Component } from './components/component2/component2.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule,
    CoreModule
  ],
  declarations: [Component2Component]
})
export class Module2Module { }
