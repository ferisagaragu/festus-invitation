import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FaqComponent } from './faq/faq.component';
import { SonarQualityComponent } from './sonar-quality/sonar-quality.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    FaqComponent,
    SonarQualityComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    FaqComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
