import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicationComponent } from './dedication.component';

describe('DedicationComponent', () => {
  let component: DedicationComponent;
  let fixture: ComponentFixture<DedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DedicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
