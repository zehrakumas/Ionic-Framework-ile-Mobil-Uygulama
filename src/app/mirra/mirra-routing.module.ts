import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MirraPage } from './mirra.page';

const routes: Routes = [
  {
    path: '',
    component: MirraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MirraPageRoutingModule {}
