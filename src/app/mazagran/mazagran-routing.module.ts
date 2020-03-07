import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MazagranPage } from './mazagran.page';

const routes: Routes = [
  {
    path: '',
    component: MazagranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MazagranPageRoutingModule {}
