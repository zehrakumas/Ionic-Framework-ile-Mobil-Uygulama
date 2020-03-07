import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrappePageRoutingModule } from './frappe-routing.module';

import { FrappePage } from './frappe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrappePageRoutingModule
  ],
  declarations: [FrappePage]
})
export class FrappePageModule {}
