import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrappePage } from './frappe.page';

const routes: Routes = [
  {
    path: '',
    component: FrappePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrappePageRoutingModule {}
