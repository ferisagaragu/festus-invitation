import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MANAGEMENT_ROUTING_CHILDREN } from '../../core/routes/management.routes';

const routes: Routes = [
  ...MANAGEMENT_ROUTING_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
