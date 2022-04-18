import { TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewEventComponent } from './view-event.component';

describe('ViewEventComponent', () => {
  let router = { navigate: jasmine.createSpy('navigate') };
  let activatedRoute = { snapshot:{ params: { uuid: null } } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [
        ViewEventComponent
      ],
      imports: [
        MatTabsModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: Router,
          useValue: router
        },{
          provide: ActivatedRoute,
          useValue: activatedRoute
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    let fixture = TestBed.createComponent(ViewEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create without indexTab path', () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot:{ params: null } } });
    let fixture = TestBed.createComponent(ViewEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.indexTab).toBe(undefined);
  });

  it('when change path to save the position tab', () => {
    let fixture = TestBed.createComponent(ViewEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    component.changePath(1);
    expect(router.navigate).toHaveBeenCalledWith(['event/view', '1' ]);
  });

});
