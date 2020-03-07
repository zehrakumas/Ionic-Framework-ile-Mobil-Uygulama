import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KahvebesPageRoutingModule } from './kahvebes-routing.module';

import { KahvebesPage } from './kahvebes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KahvebesPageRoutingModule
  ],
  declarations: [KahvebesPage]
})
export class KahvebesPageModule {}
