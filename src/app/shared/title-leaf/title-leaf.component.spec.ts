import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLeafComponent } from './title-leaf.component';

describe('TitleLeafComponent', () => {
  let component: TitleLeafComponent;
  let fixture: ComponentFixture<TitleLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleLeafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
