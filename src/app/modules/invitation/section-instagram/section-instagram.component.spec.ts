import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInstagramComponent } from './section-instagram.component';

describe('SectionInstagramComponent', () => {
  let component: SectionInstagramComponent;
  let fixture: ComponentFixture<SectionInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInstagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
