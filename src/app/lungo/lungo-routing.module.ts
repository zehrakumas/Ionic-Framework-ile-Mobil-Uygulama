import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LungoPage } from './lungo.page';

const routes: Routes = [
  {
    path: '',
    component: LungoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LungoPageRoutingModule {}
