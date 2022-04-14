import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventService } from './event.service';
import { EventModel } from '../models/event.model';
import { ServerErrorConst } from '../const/server-error.const';

const eventResp = {
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
  price: 1000,
  type: ['pdf'],
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

const chartResp = {
  "timestamp": "04-13-2022  11:35:42 a. m.",
  "status": 200,
  "data": [
    {
      "label": 2022,
      "data": [
        0,
        0,
        0,
        5000,
        0,
        200,
        0,
        1000,
        0,
        0,
        0,
        0
      ]
    }
  ]
}

const successResp = {
  status: 200
};

const unauthorizedError = new HttpErrorResponse({
  error: {
    message: 'No esta autorizado para realizar esta acción'
  },
  status: 401,
  statusText: 'Unauthorized',
  url: 'https://fake.com'
});

const unknownError = new HttpErrorResponse({
  error: '',
  status: 0,
  statusText: ServerErrorConst.unknownError,
  url: 'https://fake.com'
});

describe('EventService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let eventService: EventService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    });

    eventService = TestBed.inject(EventService);
  });

  it(`should be created`, () => {
    expect(eventService).toBeTruthy();
  });

  it(`findAllEvents success call`, (done: DoneFn) => {
    const events = { data: [ eventResp ] };
    httpClientSpy.get.and.returnValue(of(events))

    eventService.findAllEvents().subscribe(
      resp => {
        expect(resp).toEqual(events.data.map(data => new EventModel(data)));
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`findAllEvents unauthorized call`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError(unauthorizedError));

    eventService.findAllEvents().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(unauthorizedError.error.message);
        done();
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`findAllEvents server not response call`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError(unknownError));

    eventService.findAllEvents().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(ServerErrorConst.message);
        done();
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`findAllEvents validate resp call`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(null))

    eventService.findAllEvents().subscribe(
      resp => {
        expect(resp).toEqual(undefined);
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`findEventByUuid success call`, (done: DoneFn) => {
    const events = { data: eventResp };
    httpClientSpy.get.and.returnValue(of(events))

    eventService.findAllEvents('uuid').subscribe(
      resp => {
        expect(resp).toEqual(new EventModel(events.data));
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`findEventByUuid validate resp call`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(null))

    eventService.findAllEvents('uuid').subscribe(
      resp => {
        expect(resp).toEqual(undefined);
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`generateChartEvent success call`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(chartResp))

    eventService.generateChartEvent().subscribe(
      resp => {
        expect(resp).toEqual(chartResp.data);
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`generateChartEvent success call and response with null resp`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(null))

    eventService.generateChartEvent().subscribe(
      resp => {
        expect(resp).toEqual(undefined);
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`generateChartEvent unauthorized call`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError(unauthorizedError))

    eventService.generateChartEvent().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(unauthorizedError.error.message);
        done();
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`generateChartEvent call but server not response`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError(unknownError))

    eventService.generateChartEvent().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(ServerErrorConst.message);
        done();
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`createEvent success call`, (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(of(successResp))

    eventService.createEvent(new EventModel(eventResp)).subscribe(
      resp => {
        expect(resp).toEqual(successResp);
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it(`createEvent unauthorized call`, (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(throwError(unauthorizedError));

    eventService.createEvent(new EventModel(eventResp)).subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(unauthorizedError.error.message);
        done();
      }
    );

    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it(`createEvent server not response call`, (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(throwError(unknownError));

    eventService.createEvent(new EventModel(eventResp)).subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(ServerErrorConst.message);
        done();
      }
    );

    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it(`updateEvent success call`, (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(of(successResp))

    eventService.updateEvent('uuid', new EventModel(eventResp)).subscribe(
      resp => {
        expect(resp).toEqual(successResp);
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

  it(`updateEvent unauthorized call`, (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(throwError(unauthorizedError));

    eventService.updateEvent('uuid', new EventModel(eventResp)).subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(unauthorizedError.error.message);
        done();
      }
    );

    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

  it(`updateEvent server not response call`, (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(throwError(unknownError));

    eventService.updateEvent('uuid', new EventModel(eventResp)).subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(ServerErrorConst.message);
        done();
      }
    );

    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

  it(`deleteEvent success call`, (done: DoneFn) => {
    httpClientSpy.delete.and.returnValue(of(successResp))

    eventService.deleteEvent('uuid').subscribe(
      resp => {
        expect(resp).toEqual(successResp);
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.delete.calls.count()).toBe(1);
  });

  it(`deleteEvent unauthorized call`, (done: DoneFn) => {
    httpClientSpy.delete.and.returnValue(throwError(unauthorizedError));

    eventService.deleteEvent('uuid').subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(unauthorizedError.error.message);
        done();
      }
    );

    expect(httpClientSpy.delete.calls.count()).toBe(1);
  });

  it(`deleteEvent server not response call`, (done: DoneFn) => {
    httpClientSpy.delete.and.returnValue(throwError(unknownError));

    eventService.deleteEvent('uuid').subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(ServerErrorConst.message);
        done();
      }
    );

    expect(httpClientSpy.delete.calls.count()).toBe(1);
  });

});
