import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInvitationDetailComponent } from './tab-invitation-detail.component';

describe('TabInvitationDetailComponent', () => {
  let component: TabInvitationDetailComponent;
  let fixture: ComponentFixture<TabInvitationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabInvitationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInvitationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
