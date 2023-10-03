import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEnvelopeComponent } from './icon-envelope.component';

describe('IconEnvelopeComponent', () => {
  let component: IconEnvelopeComponent;
  let fixture: ComponentFixture<IconEnvelopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconEnvelopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
