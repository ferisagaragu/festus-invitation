import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EVENT_ROUTING, EVENT_ROUTING_CHILDREN } from '../../core/routes/event.routes';

const routes: Routes = [
  ...EVENT_ROUTING_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
