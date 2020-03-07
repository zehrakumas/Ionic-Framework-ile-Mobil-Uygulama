import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KahveikiPage } from './kahveiki.page';

const routes: Routes = [
  {
    path: '',
    component: KahveikiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KahveikiPageRoutingModule {}
