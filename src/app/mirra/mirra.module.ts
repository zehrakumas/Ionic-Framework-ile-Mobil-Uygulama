import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MirraPageRoutingModule } from './mirra-routing.module';

import { MirraPage } from './mirra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MirraPageRoutingModule
  ],
  declarations: [MirraPage]
})
export class MirraPageModule {}
