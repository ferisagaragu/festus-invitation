import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTicketStatusComponent } from './view-ticket-status.component';

describe('ViewTicketStatusComponent', () => {
  let component: ViewTicketStatusComponent;
  let fixture: ComponentFixture<ViewTicketStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTicketStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTicketStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
