import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSeparatorComponent } from './container-separator.component';

describe('ContainerSeparatorComponent', () => {
  let component: ContainerSeparatorComponent;
  let fixture: ComponentFixture<ContainerSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
