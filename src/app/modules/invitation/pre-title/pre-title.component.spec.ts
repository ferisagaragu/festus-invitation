import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreTitleComponent } from './pre-title.component';

describe('PreTitleComponent', () => {
  let component: PreTitleComponent;
  let fixture: ComponentFixture<PreTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
