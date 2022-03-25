import { Routes } from '@angular/router';
import { AuthorizedGuard } from 'ng-urxnium';
import { TabInvitationDetailComponent } from '../../modules/invitation/tab-invitation-detail/tab-invitation-detail.component';

export const INVITATION_ROUTING: Routes = [
  {
    path: 'invitation',
    loadChildren: () => import('../../modules/invitation/invitation.module').then(m => m.InvitationModule),
    canActivate: [ AuthorizedGuard ]
  }
];

export const INVITATION_ROUTING_CHILDREN: Routes = [
  {
    path: ':uuid',
    component: TabInvitationDetailComponent
  }
];
