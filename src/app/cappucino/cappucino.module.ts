import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CappucinoPageRoutingModule } from './cappucino-routing.module';

import { CappucinoPage } from './cappucino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CappucinoPageRoutingModule
  ],
  declarations: [CappucinoPage]
})
export class CappucinoPageModule {}
