import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KulkahvesiPage } from './kulkahvesi.page';

const routes: Routes = [
  {
    path: '',
    component: KulkahvesiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KulkahvesiPageRoutingModule {}
