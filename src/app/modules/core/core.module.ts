import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ComponentXComponent } from './component/component-x/component-x.component';
import {ServiceXService} from './services/service-x.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [ComponentXComponent],
  exports: [ComponentXComponent],
  providers: [ServiceXService]
})
export class CoreModule { }
