import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KahvedortPageRoutingModule } from './kahvedort-routing.module';

import { KahvedortPage } from './kahvedort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KahvedortPageRoutingModule
  ],
  declarations: [KahvedortPage]
})
export class KahvedortPageModule {}
