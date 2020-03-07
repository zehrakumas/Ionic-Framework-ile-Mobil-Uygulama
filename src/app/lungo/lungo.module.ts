import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LungoPageRoutingModule } from './lungo-routing.module';

import { LungoPage } from './lungo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LungoPageRoutingModule
  ],
  declarations: [LungoPage]
})
export class LungoPageModule {}
