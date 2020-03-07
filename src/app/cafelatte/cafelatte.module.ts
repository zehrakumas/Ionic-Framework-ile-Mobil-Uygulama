import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafelattePageRoutingModule } from './cafelatte-routing.module';

import { CafelattePage } from './cafelatte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafelattePageRoutingModule
  ],
  declarations: [CafelattePage]
})
export class CafelattePageModule {}
