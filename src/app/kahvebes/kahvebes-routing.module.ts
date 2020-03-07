import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KahvebesPage } from './kahvebes.page';

const routes: Routes = [
  {
    path: '',
    component: KahvebesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KahvebesPageRoutingModule {}
