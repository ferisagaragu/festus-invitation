import { Routes } from '@angular/router';

export const ROOT_ROUTING: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/invitation/void'
  }
];
