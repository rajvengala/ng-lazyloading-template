import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'module1', loadChildren: 'app/modules/module1/module1.module#Module1Module'},
  {path: 'module2', loadChildren: 'app/modules/module2/module2.module#Module2Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
