import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappConfirmationComponent } from './whatsapp-confirmation.component';

describe('WhatsappConfirmationComponent', () => {
  let component: WhatsappConfirmationComponent;
  let fixture: ComponentFixture<WhatsappConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
