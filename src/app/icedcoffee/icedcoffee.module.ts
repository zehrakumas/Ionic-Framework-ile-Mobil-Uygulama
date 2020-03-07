import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcedcoffeePageRoutingModule } from './icedcoffee-routing.module';

import { IcedcoffeePage } from './icedcoffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcedcoffeePageRoutingModule
  ],
  declarations: [IcedcoffeePage]
})
export class IcedcoffeePageModule {}
