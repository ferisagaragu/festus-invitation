import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMedalComponent } from './icon-medal.component';

describe('IconMedalComponent', () => {
  let component: IconMedalComponent;
  let fixture: ComponentFixture<IconMedalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconMedalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMedalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
