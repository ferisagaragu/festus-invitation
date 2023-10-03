import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorTwoComponent } from './separator-two.component';

describe('SeparatorTwoComponent', () => {
  let component: SeparatorTwoComponent;
  let fixture: ComponentFixture<SeparatorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatorTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
