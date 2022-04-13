import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { UrxFormatModule } from 'ng-urxnium';
import { of, throwError } from 'rxjs';
import { EventService } from '../../../core/http/event.service';
import { FormEventComponent } from './form-event.component';
import { EventModel } from '../../../core/models/event.model';
import { dateFormat } from '../../../core/formats/date.format';

const eventResp = {
  uuid: "e7aabf2d-721b-45a4-ac9b-cc50cf20af19",
  type: ['pdf'],
  firstCoupleName: 'Fernando',
  secondCoupleName: 'Alejandra',
  description: 'description',
  providerUrl: 'https://fake.com',
  providerType: 'firebase',
  endPointInvitation: 'https://fake.com',
  primaryColor: '#EABE3F',
  secondaryColor: '#5e2129',
  customTicket: true,
  price: 1000,
  advance: '$500.00 MNX',
  remaining: '$500.00 MNX',
  endDate: '2022-06-01T05:00:00.000+00:00',
  eventDate: '2022-08-01T05:00:00.000+00:00',
  createDate: '2022-04-06T04:22:59.432+00:00',
  delete: false,
  missingDay: 54,
  percentage: 4,
  unformatPrice: 1000,
  remainingDay: 56,
  name: 'Fernando & Alejandra'
}

const setEventData = (form) => {
  form.get('type').setValue(['pdf']);
  form.get('firstCoupleName').setValue('first');
  form.get('secondCoupleName').setValue('second');
  form.get('primaryColor').setValue('#fff');
  form.get('secondaryColor').setValue('#000');
  form.get('endDate').setValue(new Date());
  form.get('eventDate').setValue(new Date());
  form.get('advance').setValue('$1,000.00 MNX');
  form.get('remaining').setValue('$1,000.00 MNX');
  form.get('customTicket').setValue(false);
  form.get('description').setValue('description');
  form.get('providerUrl').setValue('https://fake-link');
  form.get('providerType').setValue('firebase');
  form.get('endPointInvitation').setValue('https://fake-link');
}

const unauthorizedError = new HttpErrorResponse({
  error: {
    message: 'No esta autorizado para realizar esta acción'
  },
  status: 401,
  statusText: 'Unauthorized',
  url: 'https://fake.com'
});

describe('FormEventComponent', () => {
  let eventServiceSpy: jasmine.SpyObj<EventService>;
  let mockRouter = { navigate: jasmine.createSpy('navigate') };
  let mockActivatedRoute = { snapshot: { params: { uuid: null } } };

  beforeEach(async () => {
    eventServiceSpy = jasmine.createSpyObj('EventService', ['findAllEvents', 'createEvent', 'updateEvent']);

    await TestBed.configureTestingModule({
      declarations: [ FormEventComponent ],
      imports: [
        ReactiveFormsModule,
        RouterModule,
        HttpClientTestingModule,
        MatCheckboxModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule,
        UrxFormatModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: Router,
          useValue: mockRouter
        },{
          provide: EventService,
          useValue: eventServiceSpy
        },{
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        },{
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE]
        },{
          provide: MAT_DATE_FORMATS,
          useValue: dateFormat
        }
      ]
    }).compileComponents();
  });

  it(`should create`, () => {
    let fixture = TestBed.createComponent(FormEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`when the component should create with uuid`, () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot: { params: { uuid: 'uuid' } } }});
    eventServiceSpy.findAllEvents.and.returnValue(of(new EventModel({ type: ['pdf'] })));
    let fixture = TestBed.createComponent(FormEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.uuid).toBe('uuid');
  });

  it(`when the component should create without uuid`, () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot: { params: null } }});
    let fixture = TestBed.createComponent(FormEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.uuid).toBe(undefined);
  });

  it(`when the component should create with uuid but server response error`, () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot: { params: { uuid: 'uuid' } } }});
    eventServiceSpy.findAllEvents.and.returnValue(throwError(unauthorizedError));
    let fixture = TestBed.createComponent(FormEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.uuid).toBe('uuid');
    expect(component.loadUpdate).toEqual(false);
  });

  it(`when save form but is invalid`, () => {
    let fixture = TestBed.createComponent(FormEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    component.save();

    expect(component.uuid).toBe(null);
    expect(component.form.invalid).toBeTruthy();
  });

  it(`when save form to create event`, (done: DoneFn) => {
    eventServiceSpy.createEvent.and.returnValue(of({ status: 201 }));
    let fixture = TestBed.createComponent(FormEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    setEventData(component.form);
    component.save();

    expect(component.uuid).toBe(null);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
    expect(component.form.invalid).toBeFalsy();
    expect(eventServiceSpy.createEvent.calls.count()).toBe(1);
    done();
  });

  it(`when save form to create event but has error`, (done: DoneFn) => {
    eventServiceSpy.createEvent.and.returnValue(throwError(unauthorizedError));
    let fixture = TestBed.createComponent(FormEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    setEventData(component.form);
    component.save();

    expect(component.uuid).toBe(null);
    expect(component.error['error']['message']).toEqual(unauthorizedError.error.message);
    expect(component.form.invalid).toBeFalsy();
    expect(eventServiceSpy.createEvent.calls.count()).toBe(1);
    done();
  });

  it(`when save form to update event`, (done: DoneFn) => {
    eventServiceSpy.findAllEvents.and.returnValue(of(new EventModel(eventResp)));
    eventServiceSpy.updateEvent.and.returnValue(of({ status: 200 }));
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot: { params: { uuid: 'uuid' } } }});
    let fixture = TestBed.createComponent(FormEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    component.save();

    expect(component.uuid).toBe('uuid');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
    expect(component.form.invalid).toBeFalsy();
    expect(eventServiceSpy.updateEvent.calls.count()).toBe(1);
    done();
  });

  it(`when save form to update event but has error`, (done: DoneFn) => {
    eventServiceSpy.findAllEvents.and.returnValue(of(new EventModel(eventResp)));
    eventServiceSpy.updateEvent.and.returnValue(throwError(unauthorizedError));
    TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot: { params: { uuid: 'uuid' } } }});
    let fixture = TestBed.createComponent(FormEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    component.save();

    expect(component.uuid).toBe('uuid');
    expect(component.error['error']['message']).toEqual(unauthorizedError.error.message);
    expect(component.form.invalid).toBeFalsy();
    expect(eventServiceSpy.updateEvent.calls.count()).toBe(1);
    done();
  });

});
