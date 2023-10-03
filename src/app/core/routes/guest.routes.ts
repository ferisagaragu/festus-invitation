import { Routes } from '@angular/router';
import { ListGuestComponent } from '../../modules/guest/list-guest/list-guest.component';
import { TicketComponent } from "../../modules/guest/ticket/ticket.component";
import { ScannerTicketComponent } from "../../modules/guest/scanner-ticket/scanner-ticket.component";

export const GUEST_ROUTING: Routes = [
  {
    path: 'guest',
    loadChildren: () => import('../../modules/guest/guest.module').then(m => m.GuestModule)
  }
];

export const GUEST_ROUTING_CHILDREN: Routes = [
  {
    path: '',
    component: ListGuestComponent
  },{
    path: 'ticket/:guestUuid',
    component: TicketComponent
  },{
    path: 'scanner',
    component: ScannerTicketComponent
  }
];
