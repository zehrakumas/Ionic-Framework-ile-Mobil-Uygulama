import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EiskaffeePage } from './eiskaffee.page';

const routes: Routes = [
  {
    path: '',
    component: EiskaffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EiskaffeePageRoutingModule {}
