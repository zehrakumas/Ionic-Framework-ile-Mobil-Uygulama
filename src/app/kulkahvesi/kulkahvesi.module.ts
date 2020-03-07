import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KulkahvesiPageRoutingModule } from './kulkahvesi-routing.module';

import { KulkahvesiPage } from './kulkahvesi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KulkahvesiPageRoutingModule
  ],
  declarations: [KulkahvesiPage]
})
export class KulkahvesiPageModule {}
