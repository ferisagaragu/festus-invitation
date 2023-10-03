import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorTrheeComponent } from './separator-trhee.component';

describe('SeparatorTrheeComponent', () => {
  let component: SeparatorTrheeComponent;
  let fixture: ComponentFixture<SeparatorTrheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatorTrheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorTrheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
