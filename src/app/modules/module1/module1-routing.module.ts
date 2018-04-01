import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component1Component} from './components/component1/component1.component';
import {Component4Component} from './components/component4/component4.component';

const routes: Routes = [
  {path: '', component: Component1Component},
  {path: 'comp4', component: Component4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
