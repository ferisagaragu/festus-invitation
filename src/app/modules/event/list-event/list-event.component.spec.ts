import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SweetAlert2Service } from 'ng-urxnium';
import { of, throwError } from 'rxjs';
import { ListEventComponent } from './list-event.component';
import { EventService } from '../../../core/http/event.service';
import { EventModel } from '../../../core/models/event.model';

const eventResp = [{
  uuid: "e7aabf2d-721b-45a4-ac9b-cc50cf20af19",
  firstCoupleName: 'Fernando',
  secondCoupleName: 'Alejandra',
  description: 'description',
  providerUrl: 'https://fake.com',
  providerType: 'firebase',
  endPointInvitation: 'https://fake.com',
  primaryColor: '#EABE3F',
  secondaryColor: '#5e2129',
  customTicket: true,
  price: '$1,000.00 MNX',
  endDate: '2022-06-01T05:00:00.000+00:00',
  eventDate: '2022-08-01T05:00:00.000+00:00',
  createDate: '2022-04-06T04:22:59.432+00:00',
  delete: false,
  missingDay: 54,
  percentage: 4,
  unformatPrice: 1000,
  remainingDay: 56,
  name: 'Fernando & Alejandra'
},{
  uuid: "e7aabf2d-721b-45a4-ac9b-cc50cf20af18",
  firstCoupleName: 'Ofelia',
  secondCoupleName: 'Isaías',
  description: 'description',
  providerUrl: 'https://fake.com',
  providerType: 'firebase',
  endPointInvitation: 'https://fake.com',
  primaryColor: '#EABE3F',
  secondaryColor: '#5e2129',
  customTicket: true,
  price: '$1,000.00 MNX',
  endDate: '2022-06-01T05:00:00.000+00:00',
  eventDate: '2022-08-01T05:00:00.000+00:00',
  createDate: '2022-04-06T04:22:59.432+00:00',
  delete: false,
  missingDay: 54,
  percentage: 4,
  unformatPrice: 1000,
  remainingDay: 56,
  name: 'Ofelia & Isaías'
}];

const unauthorizedError = new HttpErrorResponse({
  error: {
    message: 'No esta autorizado para realizar esta acción'
  },
  status: 401,
  statusText: 'Unauthorized',
  url: 'https://fake.com'
});

describe('ListEventComponent', () => {
  let eventServiceSpy: jasmine.SpyObj<EventService>;
  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;
  let sweetAlert2ServiceSpy: jasmine.SpyObj<SweetAlert2Service>;
  let router = { navigate: jasmine.createSpy('navigate') };
  let activatedRoute = { snapshot:{ params: { uuid: null } } };

  beforeEach(async () => {
    eventServiceSpy = jasmine.createSpyObj('EventService', ['findAllEvents', 'deleteEvent']);
    matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    sweetAlert2ServiceSpy = jasmine.createSpyObj('SweetAlert2Service', ['fire']);

    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [
        ListEventComponent
      ],
      imports: [
        RouterModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: EventService,
          useValue: eventServiceSpy
        },{
          provide: Router,
          useValue: router
        },{
          provide: ActivatedRoute,
          useValue: activatedRoute
        },{
          provide: SweetAlert2Service,
          useValue: sweetAlert2ServiceSpy
        },{
          provide: MatSnackBar,
          useValue: matSnackBarSpy
        }
      ]
    }).compileComponents();
  });

  it(`should create`, () => {
    eventServiceSpy.findAllEvents.and.returnValue(of([ new EventModel(eventResp[0]) ]));
    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`should create but the server doesnt response`, () => {
    eventServiceSpy.findAllEvents.and.returnValue(throwError(unauthorizedError));
    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.error['error']['message']).toBe(unauthorizedError.error.message);
  });

  it(`should create but the not has params`, () => {
    eventServiceSpy.findAllEvents.and.returnValue(of([ new EventModel(eventResp[0]) ]));
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot:{ params: null } } });
    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.deleteUuid).toBe(undefined);
  });

  it(`when find events, return any and restore data`, () => {
    eventServiceSpy.findAllEvents.and.returnValue(of<any>(eventResp));
    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.events.length).toEqual(2);

    const inputSearch = document.createElement('input');
    inputSearch.value = 'Fer';
    component.findOnEvents(inputSearch);

    expect(component.events[0].name).toEqual(eventResp[0].name);
    expect(component.events.length).toEqual(1);

    inputSearch.value = '';
    component.findOnEvents(inputSearch);

    expect(component.events.length).toBe(2);
  });

  it(`when find events restore events search input`, () => {
    eventServiceSpy.findAllEvents.and.returnValue(of<any>(eventResp));
    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    const inputSearch = document.createElement('input');
    inputSearch.value = 'Fer';
    component.restoreSearchFilter(inputSearch);

    expect(inputSearch.value).toBe('');
  });

  it(`when remove dialog is enable`, () => {
    eventServiceSpy.findAllEvents.and.returnValue(of<any>(eventResp));
    sweetAlert2ServiceSpy.fire.and.returnValue(of(false));
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot:{ params: { uuid: 'uuid' } } } });
    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.deleteUuid).toBe('uuid');
    expect(sweetAlert2ServiceSpy.fire.calls.count()).toBe(1);
  });

  it(`when remove dialog is enable and do click on okay`, () => {
    eventServiceSpy.findAllEvents.and.returnValue(of<any>(eventResp));
    eventServiceSpy.deleteEvent.and.returnValue(of(true));
    sweetAlert2ServiceSpy.fire.and.returnValue(of(true));
    matSnackBarSpy.open.and.returnValue({} as any);
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot:{ params: { uuid: 'uuid' } } } });
    let fixture = TestBed.createComponent(ListEventComponent);
    fixture.detectChanges();

    expect(eventServiceSpy.deleteEvent.calls.count()).toBe(1);
    expect(sweetAlert2ServiceSpy.fire.calls.count()).toBe(1);
    expect(matSnackBarSpy.open.calls.count()).toBe(1);
  });

  it(`when remove dialog is enable and do click on okay but server response with error`, () => {
    eventServiceSpy.findAllEvents.and.returnValue(of<any>(eventResp));
    eventServiceSpy.deleteEvent.and.returnValue(throwError(unauthorizedError));
    sweetAlert2ServiceSpy.fire.and.returnValue(of(true));
    matSnackBarSpy.open.and.returnValue({} as any);
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot:{ params: { uuid: 'uuid' } } } });
    let fixture = TestBed.createComponent(ListEventComponent);
    fixture.detectChanges();

    expect(eventServiceSpy.deleteEvent.calls.count()).toBe(1);
    expect(sweetAlert2ServiceSpy.fire.calls.count()).toBe(1);
    expect(matSnackBarSpy.open.calls.count()).toBe(1);
  });

});
