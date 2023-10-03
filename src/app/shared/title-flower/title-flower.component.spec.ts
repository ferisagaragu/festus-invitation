import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFlowerComponent } from './title-flower.component';

describe('TitleFlowerComponent', () => {
  let component: TitleFlowerComponent;
  let fixture: ComponentFixture<TitleFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleFlowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
