import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHeartComponent } from './icon-heart.component';

describe('IconHeartComponent', () => {
  let component: IconHeartComponent;
  let fixture: ComponentFixture<IconHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconHeartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
