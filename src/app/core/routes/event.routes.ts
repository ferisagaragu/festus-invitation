import { Routes } from '@angular/router';
import { AuthorizedGuard } from 'ng-urxnium';
import { ListEventComponent } from '../../modules/event/list-event/list-event.component';
import { FormEventComponent } from '../../modules/event/form-event/form-event.component';
import { ViewEventComponent } from '../../modules/event/view-event/view-event.component';

export const EVENT_ROUTING: Routes = [
  {
    path: 'event',
    loadChildren: () => import('../../modules/event/event.module').then(m => m.EventModule),
    canActivate: [ AuthorizedGuard ]
  }
];

export const EVENT_ROUTING_CHILDREN: Routes = [
  {
    path: '',
    component: ViewEventComponent
  },{
    path: 'delete/:uuid',
    component: ListEventComponent
  },{
    path: 'create',
    component: FormEventComponent
  },{
    path: 'update/:uuid',
    component: FormEventComponent
  }
];
