import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GUEST_ROUTING_CHILDREN } from '../../core/routes/guest.routes';

const routes: Routes = [
  ...GUEST_ROUTING_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
