import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AffogatoPageRoutingModule } from './affogato-routing.module';

import { AffogatoPage } from './affogato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AffogatoPageRoutingModule
  ],
  declarations: [AffogatoPage]
})
export class AffogatoPageModule {}
