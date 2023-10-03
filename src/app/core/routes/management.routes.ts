import { Routes } from '@angular/router';
import { ViewGuestComponent } from '../../modules/management/view-guest/view-guest.component';

export const MANAGEMENT_ROUTING: Routes = [
  {
    path: 'management',
    loadChildren: () => import('../../modules/management/management.module').then(m => m.ManagementModule)
  }
];

export const MANAGEMENT_ROUTING_CHILDREN: Routes = [
  {
    path: '',
    component: ViewGuestComponent
  }
];
