import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorInvertComponent } from './separator-invert.component';

describe('SeparatorInvertComponent', () => {
  let component: SeparatorInvertComponent;
  let fixture: ComponentFixture<SeparatorInvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatorInvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorInvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
