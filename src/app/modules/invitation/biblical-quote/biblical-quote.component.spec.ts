import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblicalQuoteComponent } from './biblical-quote.component';

describe('BiblicalQuoteComponent', () => {
  let component: BiblicalQuoteComponent;
  let fixture: ComponentFixture<BiblicalQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiblicalQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblicalQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
