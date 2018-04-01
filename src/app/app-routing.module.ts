import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  // loadChildren makes the module load lazily
  {path: 'module1', loadChildren: 'app/modules/module1/module1.module#Module1Module'},
  {path: 'module2', loadChildren: 'app/modules/module2/module2.module#Module2Module'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        enableTracing: false,
        // loads feature modules in the background
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
