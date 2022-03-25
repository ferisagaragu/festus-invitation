import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { InvitationRoutingModule } from './invitation-routing.module';
import { TabInvitationDetailComponent } from './tab-invitation-detail/tab-invitation-detail.component';

@NgModule({
  declarations: [
    TabInvitationDetailComponent
  ],
  imports: [
    CommonModule,
    InvitationRoutingModule,
    MatTabsModule
  ]
})
export class InvitationModule { }
