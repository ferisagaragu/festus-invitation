import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaryMeasuresComponent } from './sanitary-measures.component';

describe('SanitaryMeasuresComponent', () => {
  let component: SanitaryMeasuresComponent;
  let fixture: ComponentFixture<SanitaryMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanitaryMeasuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitaryMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
