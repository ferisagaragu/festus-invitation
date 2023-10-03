import { Routes } from '@angular/router';
import { DashboardComponent } from '../../modules/invitation/dashboard/dashboard.component';

export const INVITATION_ROUTING: Routes = [
  {
    path: 'invitation/:guestUuid',
    loadChildren: () => import('../../modules/invitation/invitation.module').then(m => m.InvitationModule)
  }
];

export const INVITATION_ROUTING_CHILDREN: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
