import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabInvitationDetailComponent } from './tab-invitation-detail.component';

describe('TabInvitationDetailComponent', () => {
  let component: TabInvitationDetailComponent;
  let fixture: ComponentFixture<TabInvitationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TabInvitationDetailComponent
      ],
      imports: [
        MatTabsModule,
        BrowserAnimationsModule
      ]
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
