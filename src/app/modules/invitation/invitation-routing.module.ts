import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INVITATION_ROUTING_CHILDREN } from '../../core/routes/invitation.routes';

const routes: Routes = [
  ...INVITATION_ROUTING_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationRoutingModule { }
