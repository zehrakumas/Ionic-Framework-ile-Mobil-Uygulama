import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurkkahvesiPage } from './turkkahvesi.page';

const routes: Routes = [
  {
    path: '',
    component: TurkkahvesiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurkkahvesiPageRoutingModule {}
