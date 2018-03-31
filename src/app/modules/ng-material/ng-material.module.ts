import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule
  ]
})
export class NgMaterialModule {
}
