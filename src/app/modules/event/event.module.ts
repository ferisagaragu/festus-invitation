import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

import { EventRoutingModule } from './event-routing.module';
import { ListEventComponent } from './list-event/list-event.component';
import { ItemEventComponent } from './item-event/item-event.component';

@NgModule({
  declarations: [
    ListEventComponent,
    ItemEventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatIconModule
  ]
})
export class EventModule { }
