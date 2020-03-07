import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuvarikahvesiPageRoutingModule } from './suvarikahvesi-routing.module';

import { SuvarikahvesiPage } from './suvarikahvesi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuvarikahvesiPageRoutingModule
  ],
  declarations: [SuvarikahvesiPage]
})
export class SuvarikahvesiPageModule {}
