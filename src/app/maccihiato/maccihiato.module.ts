import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaccihiatoPageRoutingModule } from './maccihiato-routing.module';

import { MaccihiatoPage } from './maccihiato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaccihiatoPageRoutingModule
  ],
  declarations: [MaccihiatoPage]
})
export class MaccihiatoPageModule {}
