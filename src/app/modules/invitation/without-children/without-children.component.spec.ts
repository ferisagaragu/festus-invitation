import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutChildrenComponent } from './without-children.component';

describe('WithoutChildrenComponent', () => {
  let component: WithoutChildrenComponent;
  let fixture: ComponentFixture<WithoutChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
