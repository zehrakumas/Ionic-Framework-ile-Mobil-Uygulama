import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuvarikahvesiPage } from './suvarikahvesi.page';

const routes: Routes = [
  {
    path: '',
    component: SuvarikahvesiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuvarikahvesiPageRoutingModule {}
