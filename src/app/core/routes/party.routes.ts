import { Routes } from '@angular/router';
import { FireComponent } from '../../modules/party/fire/fire.component';

export const PARTY_ROUTING: Routes = [
  {
    path: 'party',
    loadChildren: () => import('../../modules/party/party.module').then(m => m.PartyModule)
  }
];

export const PARTY_ROUTING_CHILDREN: Routes = [
  {
    path: '',
    component: FireComponent
  }
];
