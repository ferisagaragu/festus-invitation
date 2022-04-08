import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { ServerErrorConst } from '../const/server-error.const';
import { UserModel } from '../models/user.model';
import { UserService } from './user.service';

const unauthorizedError = new HttpErrorResponse({
  error: {
    message: 'No esta autorizado para realizar esta acción'
  },
  status: 401,
  statusText: 'Unauthorized',
  url: 'http://fake.com'
});

const unknownError = new HttpErrorResponse({
  error: '',
  status: 0,
  statusText: ServerErrorConst.unknownError,
  url: 'http://fake.com'
});

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
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    });

    userService = TestBed.inject(UserService);
  });

  it(`should be created`, () => {
    expect(userService).toBeTruthy();
  });

  it(`refreshUserImage success call`, (done: DoneFn) => {
    const respData = { data: 'http://fake-image' };
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

  it(`refreshUserImage unauthenticated call`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError(unauthorizedError));

    userService.refreshUserImage().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(unauthorizedError.error.message);
        done();
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`refreshUserImage unknown error call`, (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError(unknownError));

    userService.refreshUserImage().subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain(ServerErrorConst.message);
        done();
      }
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it(`updateUser success call`, (done: DoneFn) => {
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

  it(`updateUser bad call`, (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(throwError(unauthorizedError));

    userService.updateUser(new UserModel({})).subscribe(
      _ => done.fail,
      error => {
        expect(error).toEqual(unauthorizedError.error.message);
        done();
      }
    );

    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

  it(`updateUser bad call sever not response`, (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(throwError(unknownError));

    userService.updateUser(new UserModel({})).subscribe(
      _ => done.fail,
      error => {
        expect(error).toEqual(ServerErrorConst.message);
        done();
      }
    );

    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

});
