import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuestComponent } from './list-guest.component';

describe('ListGuestComponent', () => {
  let component: ListGuestComponent;
  let fixture: ComponentFixture<ListGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
