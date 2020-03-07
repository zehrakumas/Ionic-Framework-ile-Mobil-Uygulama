import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KahveucPageRoutingModule } from './kahveuc-routing.module';

import { KahveucPage } from './kahveuc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KahveucPageRoutingModule
  ],
  declarations: [KahveucPage]
})
export class KahveucPageModule {}
