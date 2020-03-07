import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KahvedortPage } from './kahvedort.page';

const routes: Routes = [
  {
    path: '',
    component: KahvedortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KahvedortPageRoutingModule {}
