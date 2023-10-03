import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerTicketComponent } from './scanner-ticket.component';

describe('ScannerTicketComponent', () => {
  let component: ScannerTicketComponent;
  let fixture: ComponentFixture<ScannerTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
