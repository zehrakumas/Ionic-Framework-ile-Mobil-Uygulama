import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EiskaffeePageRoutingModule } from './eiskaffee-routing.module';

import { EiskaffeePage } from './eiskaffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EiskaffeePageRoutingModule
  ],
  declarations: [EiskaffeePage]
})
export class EiskaffeePageModule {}
