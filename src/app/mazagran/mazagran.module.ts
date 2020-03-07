import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MazagranPageRoutingModule } from './mazagran-routing.module';

import { MazagranPage } from './mazagran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MazagranPageRoutingModule
  ],
  declarations: [MazagranPage]
})
export class MazagranPageModule {}
