import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CappucinoPage } from './cappucino.page';

const routes: Routes = [
  {
    path: '',
    component: CappucinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CappucinoPageRoutingModule {}
