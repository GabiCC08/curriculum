import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GabrielaColaPage } from './gabriela-cola.page';

const routes: Routes = [
  {
    path: '',
    component: GabrielaColaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GabrielaColaPageRoutingModule {}
