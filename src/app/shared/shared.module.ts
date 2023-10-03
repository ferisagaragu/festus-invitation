import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UrxAlertModule, UrxGridModule, UrxLocationModule, UrxQRModule } from 'ng-urxnium';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { SeparatorComponent } from './separator/separator.component';
import { SeparatorInvertComponent } from './separator-invert/separator-invert.component';
import { IconEnvelopeComponent } from './icon-envelope/icon-envelope.component';
import { IconHeartComponent } from './icon-heart/icon-heart.component';
import { SeparatorTwoComponent } from './separator-two/separator-two.component';
import { SeparatorInvertTwoComponent } from './separator-invert-two/separator-invert-two.component';
import { TitleFlowerComponent } from './title-flower/title-flower.component';
import { TitleLeafComponent } from './title-leaf/title-leaf.component';
import { CountUpDirective } from "../core/directive/count-up.directive";
import { SeparatorTrheeComponent } from './separator-trhee/separator-trhee.component';
import { ContainerSeparatorComponent } from './container-separator/container-separator.component';
import { SeparatorInvertTrheeComponent } from './separator-invert-trhee/separator-invert-trhee.component';
import { IconChristComponent } from './icon-christ/icon-christ.component';
import { IconVirginComponent } from './icon-virgin/icon-virgin.component';
import { IconMedalComponent } from './icon-medal/icon-medal.component';
import { SeparatorFourComponent } from './separator-four/separator-four.component';

@NgModule({
  declarations: [
    SeparatorComponent,
    SeparatorInvertComponent,
    IconEnvelopeComponent,
    IconHeartComponent,
    SeparatorTwoComponent,
    SeparatorInvertTwoComponent,
    TitleFlowerComponent,
    TitleLeafComponent,
    CountUpDirective,
    SeparatorTrheeComponent,
    ContainerSeparatorComponent,
    SeparatorInvertTrheeComponent,
    IconChristComponent,
    IconVirginComponent,
    IconMedalComponent,
    SeparatorFourComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    IvyCarouselModule,
    UrxGridModule,
    UrxLocationModule,
    UrxAlertModule,
    UrxQRModule
  ],
  exports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    IvyCarouselModule,
    UrxLocationModule,
    UrxAlertModule,
    UrxQRModule,

    SeparatorComponent,
    SeparatorInvertComponent,
    IconEnvelopeComponent,
    IconHeartComponent,
    SeparatorTwoComponent,
    SeparatorInvertTwoComponent,
    TitleFlowerComponent,
    TitleLeafComponent,
    CountUpDirective,
    ContainerSeparatorComponent,
    IconChristComponent,
    IconVirginComponent,
    IconVirginComponent,
    IconMedalComponent
  ]
})
export class SharedModule { }
