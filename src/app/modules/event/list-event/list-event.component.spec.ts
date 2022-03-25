import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { ListEventComponent } from './list-event.component';

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
      "events": {
        "data": [
          {
            "uuid": "d166408b-a9d6-465d-a1ee-cd9de4780500",
            "name": "fake event",
            "price": 150000.01,
            "description": "test description",
            "urlDataBase": "http://fake-link",
            "endPointInvitation": "http://fake-end",
            "primaryColor": "#F44336",
            "accentColor": "#9C27B0",
            "customTicket": false,
            "endDate": "2022/03/23",
            "createDate": "2022/03/23"
          }
        ]
      }
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
      statusText: 'Unknown Error',
      url: 'http://fake.com'
    });
    httpClientSpy.get.and.returnValue(throwError(error));

    let fixture = TestBed.createComponent(ListEventComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.error).toContain('Oops parece que hay un error en nuestros servidores, inténtalo mas tarde');
  });

});
