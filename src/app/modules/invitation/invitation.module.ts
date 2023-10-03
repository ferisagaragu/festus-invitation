import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleComponent } from './title/title.component';
import { GuestMessageComponent } from './guest-message/guest-message.component';
import { SharedModule } from '../../shared/shared.module';
import { DedicationComponent } from './dedication/dedication.component';
import { GodparentsComponent } from './godparents/godparents.component';
import { BiblicalQuoteComponent } from './biblical-quote/biblical-quote.component';
import { TimerComponent } from './timer/timer.component';
import { MomentComponent } from './moment/moment.component';
import { LocationComponent } from './location/location.component';
import { AdviceComponent } from './advice/advice.component';
import { GiftComponent } from './gift/gift.component';
import { SanitaryMeasuresComponent } from './sanitary-measures/sanitary-measures.component';
import { FormGuestComponent } from './form-guest/form-guest.component';
import { FaqComponent } from './faq/faq.component';
import { WhatsappConfirmationComponent } from './whatsapp-confirmation/whatsapp-confirmation.component';
import { DialogPhotoComponent } from './dialog-photo/dialog-photo.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { WithoutChildrenComponent } from './without-children/without-children.component';
import { PreTitleComponent } from './pre-title/pre-title.component';
import { SectionInstagramComponent } from './section-instagram/section-instagram.component';
import { ItineraryComponent } from "./itinerary/itinerary.component";
import { DetailHistoryComponent } from './detail-history/detail-history.component';
import { FilterComponent } from './filter/filter.component';
import { IntroComponent } from './intro/intro.component';
import { ComeMessageComponent } from './come-message/come-message.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TitleComponent,
    GuestMessageComponent,
    DedicationComponent,
    GodparentsComponent,
    BiblicalQuoteComponent,
    TimerComponent,
    MomentComponent,
    LocationComponent,
    AdviceComponent,
    GiftComponent,
    SanitaryMeasuresComponent,
    FormGuestComponent,
    FaqComponent,
    WhatsappConfirmationComponent,
    DialogPhotoComponent,
    AccommodationComponent,
    WithoutChildrenComponent,
    PreTitleComponent,
    SectionInstagramComponent,
    ItineraryComponent,
    DetailHistoryComponent,
    FilterComponent,
    IntroComponent,
    ComeMessageComponent
  ],
  imports: [
    CommonModule,
    InvitationRoutingModule,
    SharedModule
  ]
})
export class InvitationModule { }
