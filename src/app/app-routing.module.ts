import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gabriela-cola',
    pathMatch: 'full'
  },
  {
    path: 'gabriela-cola',
    loadChildren: () => import('./gabriela-cola/gabriela-cola.module').then( m => m.GabrielaColaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
