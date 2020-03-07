import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcedcoffeePage } from './icedcoffee.page';

const routes: Routes = [
  {
    path: '',
    component: IcedcoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcedcoffeePageRoutingModule {}
