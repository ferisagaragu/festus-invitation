import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FaqComponent } from './faq/faq.component';
import { SonarQualityComponent } from './sonar-quality/sonar-quality.component';
import { HeaderComponent } from './header/header.component';
import { FormConfigUserComponent } from './form-config-user/form-config-user.component';
import { InputUserIconComponent } from './input-user-icon/input-user-icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FaqComponent,
    SonarQualityComponent,
    HeaderComponent,
    FormConfigUserComponent,
    InputUserIconComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    FaqComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
