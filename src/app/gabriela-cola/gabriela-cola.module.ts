import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GabrielaColaPageRoutingModule } from './gabriela-cola-routing.module';

import { GabrielaColaPage } from './gabriela-cola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GabrielaColaPageRoutingModule
  ],
  declarations: [GabrielaColaPage]
})
export class GabrielaColaPageModule {}
