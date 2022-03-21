import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonarQualityComponent } from './sonar-quality.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SonarQualityComponent', () => {
  let component: SonarQualityComponent;
  let fixture: ComponentFixture<SonarQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonarQualityComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonarQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
