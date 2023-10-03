import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconChristComponent } from './icon-christ.component';

describe('IconChristComponent', () => {
  let component: IconChristComponent;
  let fixture: ComponentFixture<IconChristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconChristComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconChristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
