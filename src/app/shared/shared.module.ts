import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FaqComponent } from './faq/faq.component';
import { SonarQualityComponent } from './sonar-quality/sonar-quality.component';

@NgModule({
  declarations: [
    FaqComponent,
    SonarQualityComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    FaqComponent
  ]
})
export class SharedModule { }
