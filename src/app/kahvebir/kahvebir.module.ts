import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KahvebirPageRoutingModule } from './kahvebir-routing.module';

import { KahvebirPage } from './kahvebir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KahvebirPageRoutingModule
  ],
  declarations: [KahvebirPage]
})
export class KahvebirPageModule {}
