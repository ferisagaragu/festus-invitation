import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorInvertTrheeComponent } from './separator-invert-trhee.component';

describe('SeparatorInvertTrheeComponent', () => {
  let component: SeparatorInvertTrheeComponent;
  let fixture: ComponentFixture<SeparatorInvertTrheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatorInvertTrheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorInvertTrheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
