import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeMessageComponent } from './come-message.component';

describe('ComeMessageComponent', () => {
  let component: ComeMessageComponent;
  let fixture: ComponentFixture<ComeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComeMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
