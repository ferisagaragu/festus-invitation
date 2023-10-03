import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconVirginComponent } from './icon-virgin.component';

describe('IconVirginComponent', () => {
  let component: IconVirginComponent;
  let fixture: ComponentFixture<IconVirginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconVirginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconVirginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
