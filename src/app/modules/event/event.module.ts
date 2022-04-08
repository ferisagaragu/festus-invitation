import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UrxAlertModule, UrxFormatModule } from 'ng-urxnium';

import { EventRoutingModule } from './event-routing.module';
import { ListEventComponent } from './list-event/list-event.component';
import { ItemEventComponent } from './item-event/item-event.component';
import { FormEventComponent } from './form-event/form-event.component';

@NgModule({
  declarations: [
    ListEventComponent,
    ItemEventComponent,
    FormEventComponent
  ],
	imports: [
		CommonModule,
		EventRoutingModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatCardModule,
		MatChipsModule,
		MatProgressBarModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatTooltipModule,
		MatSelectModule,
		MatOptionModule,
		MatDatepickerModule,
		MatCheckboxModule,
		MatMenuModule,
    MatSnackBarModule,
    UrxFormatModule,
    UrxAlertModule
	]
})
export class EventModule { }
