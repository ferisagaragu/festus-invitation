import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventService } from './event.service';
import { EventModel } from '../models/event.model';
import { ServerErrorEnum } from '../enum/server-error.enum';

describe('EventService', () => {

  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let eventService: EventService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });

    eventService = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(eventService).toBeTruthy();
  });

  it(`findAllEvents success call`, (done: DoneFn) => {
    const events = {
      data: [
        {
          uuid: 'caaa16b7-3bc1-45da-a062-c2ef439fdf4c',
          name: 'fake name',
          description: 'description',
          urlDataBase: 'urlDataBase',
          endPointInvitation: 'endPointInvitation',
          primaryColor: 'primaryColor',
          accentColor: 'accentColor',
          customTicket: 'customTicket',
          endDate: Date(),
          createDate: Date()
        }
      ]
    };

    httpClientSpy.get.and.returnValue(of(events))

    eventService.findAllEvents().subscribe(
      resp => {
        expect(resp)
          .withContext('expected EventModel')
          .toEqual(events.data.map(data => new EventModel(data)));
        done();
      },
      error => {
        done.fail;
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`findAllEvents unauthorized call`, (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: {
        message: 'No esta autorizado para realizar esta acción'
      },
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://fake.com'
    });
    httpClientSpy.get.and.returnValue(throwError(error));

    eventService.findAllEvents().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain('No esta autorizado para realizar esta acción');
        done();
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`findAllEvents server not response call`, (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: '',
      status: 0,
      statusText: ServerErrorEnum.unknownError,
      url: 'http://fake.com'
    });
    httpClientSpy.get.and.returnValue(throwError(error));

    eventService.findAllEvents().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(ServerErrorEnum.message);
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

});
