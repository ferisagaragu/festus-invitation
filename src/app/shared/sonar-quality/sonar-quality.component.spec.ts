import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SonarQualityComponent } from './sonar-quality.component';

describe('SonarQualityComponent', () => {

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

  it(`should create`, () => {
    let fixture = TestBed.createComponent(SonarQualityComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
