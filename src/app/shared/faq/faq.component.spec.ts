import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FaqComponent } from './faq.component';

describe('FaqComponent', () => {
  let matDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    matDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ FaqComponent ],
      imports: [
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialog, useValue: matDialog }
      ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FaqComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('open dialog whit openSonarQualityDialog function', () => {
    const fixture = TestBed.createComponent(FaqComponent);
    const component = fixture.componentInstance;
    matDialog.open.and.returnValue(MatDialog['opened'])
    component.openSonarQualityDialog();
    expect(matDialog.open.calls.count()).toBe(1);
  });

});
