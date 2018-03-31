import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {ComponentXComponent} from './component/component-x/component-x.component';
import {ServiceXService} from './services/service-x.service';
import {NgMaterialModule} from '../ng-material/ng-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgMaterialModule,
    FlexLayoutModule
  ],
  declarations: [ComponentXComponent],
  // export components, modules which will be used by components in other modules
  exports: [
    ComponentXComponent,
    NgMaterialModule,
    FlexLayoutModule
  ],
  // services declared here are available throughout the application (all modules) since
  // this module is imported by Root module
  providers: [ServiceXService]
})
export class CoreModule {
}
