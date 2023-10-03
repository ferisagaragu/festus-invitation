import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuestComponent } from './view-guest.component';

describe('ViewGuestComponent', () => {
  let component: ViewGuestComponent;
  let fixture: ComponentFixture<ViewGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
