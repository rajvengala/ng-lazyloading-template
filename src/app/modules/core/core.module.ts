import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {ComponentXComponent} from './component/component-x/component-x.component';
import {ServiceXService} from './services/service-x.service';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [ComponentXComponent],
  // export components which will be used by components in other modules
  exports: [ComponentXComponent],
  // services declared here are available throughout the application (all modules) since
  // this module is imported by Root module
  providers: [ServiceXService]
})
export class CoreModule {
}
