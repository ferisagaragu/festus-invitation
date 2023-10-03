import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PARTY_ROUTING_CHILDREN } from '../../core/routes/party.routes';

const routes: Routes = [
  ...PARTY_ROUTING_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }
