import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurkkahvesiPageRoutingModule } from './turkkahvesi-routing.module';

import { TurkkahvesiPage } from './turkkahvesi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurkkahvesiPageRoutingModule
  ],
  declarations: [TurkkahvesiPage]
})
export class TurkkahvesiPageModule {}
