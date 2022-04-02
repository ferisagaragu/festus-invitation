import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { ServerErrorEnum } from '../enum/server-error.enum';
import { UserModel } from '../models/user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let userService: UserService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });

    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('refreshUserImage success call', (done: DoneFn) => {
    const respData = {
      data: 'http://fake-image'
    }
    httpClientSpy.get.and.returnValue(of(respData));

    userService.refreshUserImage().subscribe(
      resp => {
        expect(resp).toEqual(respData.data);
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('refreshUserImage bad call', (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: {
        message: 'No esta autorizado para realizar esta acción'
      },
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://fake.com'
    });
    httpClientSpy.get.and.returnValue(throwError(error));

    userService.refreshUserImage().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain('No esta autorizado para realizar esta acción');
        done();
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('refreshUserImage unauthenticated call', (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: '',
      status: 0,
      statusText: ServerErrorEnum.unknownError,
      url: 'http://fake.com'
    });
    httpClientSpy.get.and.returnValue(throwError(error));

    userService.refreshUserImage().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(ServerErrorEnum.message);
        done();
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('updateUser success call', (done: DoneFn) => {
    const respData = { status: 200 };
    httpClientSpy.put.and.returnValue(of(respData));

    userService.updateUser(new UserModel({})).subscribe(
      resp => {
        expect(resp).toEqual(respData);
        done();
      },
      _ => done.fail
    );

    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

  it('updateUser bad call', (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: {
        message: 'No esta autorizado para realizar esta acción'
      },
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://fake.com'
    });
    httpClientSpy.put.and.returnValue(throwError(error));

    userService.updateUser(new UserModel({})).subscribe(
      _ => done.fail,
      error => {
        expect(error.status).toEqual(error.status);
        done();
      }
    );

    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

  it('updateUser bad call sever not response', (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: null,
      status: 0,
      statusText: ServerErrorEnum.unknownError,
      url: 'http://fake.com'
    });
    httpClientSpy.put.and.returnValue(throwError(error));

    userService.updateUser(new UserModel({})).subscribe(
      _ => done.fail,
      error => {
        expect(error).toEqual(ServerErrorEnum.message);
        done();
      }
    );

    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

});
