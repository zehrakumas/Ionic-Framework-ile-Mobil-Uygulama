import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaccihiatoPage } from './maccihiato.page';

const routes: Routes = [
  {
    path: '',
    component: MaccihiatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaccihiatoPageRoutingModule {}
