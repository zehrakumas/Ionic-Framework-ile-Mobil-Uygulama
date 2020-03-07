import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KahvebirPage } from './kahvebir.page';

const routes: Routes = [
  {
    path: '',
    component: KahvebirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KahvebirPageRoutingModule {}
