import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorFourComponent } from './separator-four.component';

describe('SeparatorFourComponent', () => {
  let component: SeparatorFourComponent;
  let fixture: ComponentFixture<SeparatorFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatorFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
