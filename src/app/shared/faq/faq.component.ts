import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SonarQualityComponent } from '../sonar-quality/sonar-quality.component';
import { sonarQuality } from '../../core/data/sonar-quality.data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  sonarQuality: any;

  constructor(public dialog: MatDialog) {
    this.sonarQuality = sonarQuality;
  }

  openSonarQualityDialog(): void {
    this.dialog.open(SonarQualityComponent, { width: '350px' });
  }

}
