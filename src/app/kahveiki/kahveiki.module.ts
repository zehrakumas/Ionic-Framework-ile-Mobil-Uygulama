import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KahveikiPageRoutingModule } from './kahveiki-routing.module';

import { KahveikiPage } from './kahveiki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KahveikiPageRoutingModule
  ],
  declarations: [KahveikiPage]
})
export class KahveikiPageModule {}
