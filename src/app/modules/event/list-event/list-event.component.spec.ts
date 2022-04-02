import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { ListEventComponent } from './list-event.component';
import { ServerErrorEnum } from '../../../core/enum/server-error.enum';

describe('ListEventComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ ListEventComponent ],
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    httpClientSpy.get.and.returnValue(of({
      "data": [
        {
          "uuid": "c61b2310-5ec8-4b27-865e-f69e56307e38",
          "name": "Evento de prueba no 2",
          "price": 2300.01,
          "description": "fake text",
          "urlDataBase": "http://end-point-invitation/fake",
          "endPointInvitation": "http://end-point-invitation/fake",
          "primaryColor": "#3F51B5",
          "accentColor": "#E91E63",
          "customTicket": false,
          "remainingDay": "59",
          "missingDay": "9",
          "percentage": "67",
          "endDate": "2022-05-30",
          "createDate": "2022-03-23"
        }
      ]
    }));

    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create but the server doesn\'t response', () => {
    const error = new HttpErrorResponse({
      error: '',
      status: 0,
      statusText: ServerErrorEnum.unknownError,
      url: 'http://fake.com'
    });
    httpClientSpy.get.and.returnValue(throwError(error));

    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.error).toContain(ServerErrorEnum.message);
  });

  it('whe search events on the input', () => {
    httpClientSpy.get.and.returnValue(of({
      "data": [
        {
          "uuid": "c61b2310-5ec8-4b27-865e-f69e56307e38",
          "name": "Evento de prueba no 2",
          "price": 2300.01,
          "description": "fake text",
          "urlDataBase": "http://end-point-invitation/fake",
          "endPointInvitation": "http://end-point-invitation/fake",
          "primaryColor": "#3F51B5",
          "accentColor": "#E91E63",
          "customTicket": false,
          "remainingDay": "59",
          "missingDay": "9",
          "percentage": "67",
          "endDate": "2022-05-30",
          "createDate": "2022-03-23"
        },{
          "uuid": "c61b2310-5ec8-4b27-865e-f69e56307e38",
          "name": "Evento de prueba no 3",
          "price": 2300.01,
          "description": "fake text",
          "urlDataBase": "http://end-point-invitation/fake",
          "endPointInvitation": "http://end-point-invitation/fake",
          "primaryColor": "#3F51B5",
          "accentColor": "#E91E63",
          "customTicket": false,
          "remainingDay": "59",
          "missingDay": "9",
          "percentage": "67",
          "endDate": "2022-05-30",
          "createDate": "2022-03-23"
        }
      ]
    }));

    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    const inputSearch = document.createElement('input');
    inputSearch.value = 'no 2';
    component.findOnEvents(inputSearch);
    fixture.detectChanges();

    expect(component.events[0].name).toBe('Evento de prueba no 2');
    expect(component.search).toBeTruthy();
  });

  it('whe search and restore events', () => {
    httpClientSpy.get.and.returnValue(of({
      "data": [
        {
          "uuid": "c61b2310-5ec8-4b27-865e-f69e56307e38",
          "name": "Evento de prueba no 2",
          "price": 2300.01,
          "description": "fake text",
          "urlDataBase": "http://end-point-invitation/fake",
          "endPointInvitation": "http://end-point-invitation/fake",
          "primaryColor": "#3F51B5",
          "accentColor": "#E91E63",
          "customTicket": false,
          "remainingDay": "59",
          "missingDay": "9",
          "percentage": "67",
          "endDate": "2022-05-30",
          "createDate": "2022-03-23"
        },{
          "uuid": "c61b2310-5ec8-4b27-865e-f69e56307e38",
          "name": "Evento de prueba no 3",
          "price": 2300.01,
          "description": "fake text",
          "urlDataBase": "http://end-point-invitation/fake",
          "endPointInvitation": "http://end-point-invitation/fake",
          "primaryColor": "#3F51B5",
          "accentColor": "#E91E63",
          "customTicket": false,
          "remainingDay": "59",
          "missingDay": "9",
          "percentage": "67",
          "endDate": "2022-05-30",
          "createDate": "2022-03-23"
        }
      ]
    }));

    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    const inputSearch = document.createElement('input');
    inputSearch.value = '';
    component.findOnEvents(inputSearch);
    fixture.detectChanges();

    expect(component.events.length).toBe(2);
    expect(component.search).toBeFalsy();
  });

  it('whe search and external restore events', () => {
    httpClientSpy.get.and.returnValue(of({
      "data": [
        {
          "uuid": "c61b2310-5ec8-4b27-865e-f69e56307e38",
          "name": "Evento de prueba no 2",
          "price": 2300.01,
          "description": "fake text",
          "urlDataBase": "http://end-point-invitation/fake",
          "endPointInvitation": "http://end-point-invitation/fake",
          "primaryColor": "#3F51B5",
          "accentColor": "#E91E63",
          "customTicket": false,
          "remainingDay": "59",
          "missingDay": "9",
          "percentage": "67",
          "endDate": "2022-05-30",
          "createDate": "2022-03-23"
        },{
          "uuid": "c61b2310-5ec8-4b27-865e-f69e56307e38",
          "name": "Evento de prueba no 3",
          "price": 2300.01,
          "description": "fake text",
          "urlDataBase": "http://end-point-invitation/fake",
          "endPointInvitation": "http://end-point-invitation/fake",
          "primaryColor": "#3F51B5",
          "accentColor": "#E91E63",
          "customTicket": false,
          "remainingDay": "59",
          "missingDay": "9",
          "percentage": "67",
          "endDate": "2022-05-30",
          "createDate": "2022-03-23"
        }
      ]
    }));

    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    const inputSearch = document.createElement('input');
    inputSearch.value = 'No 2';
    component.restoreSearchFilter(inputSearch);
    fixture.detectChanges();

    expect(inputSearch.value).toBe('');
    expect(component.events.length).toBe(2);
    expect(component.search).toBeFalsy();
  });

});
