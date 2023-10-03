import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGuestComponent } from './table-guest.component';

describe('TableGuestComponent', () => {
  let component: TableGuestComponent;
  let fixture: ComponentFixture<TableGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
