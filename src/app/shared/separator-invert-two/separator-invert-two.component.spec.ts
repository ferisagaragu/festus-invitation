import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorInvertTwoComponent } from './separator-invert-two.component';

describe('SeparatorInvertTwoComponent', () => {
  let component: SeparatorInvertTwoComponent;
  let fixture: ComponentFixture<SeparatorInvertTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatorInvertTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorInvertTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
