import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHistoryComponent } from './detail-history.component';

describe('DetailHistoryComponent', () => {
  let component: DetailHistoryComponent;
  let fixture: ComponentFixture<DetailHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
