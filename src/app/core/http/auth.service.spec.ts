import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { UserModel } from '../models/user.model';

describe('AuthService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let authService: AuthService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });

    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it(`sigIn success call`, (done: DoneFn) => {
    const user = {
      data: {
        uuid: '',
        name: 'fakeName',
        surname: 'fakeSurname',
        motherSurname: 'fakeMotherSurname',
        photo: 'image.png',
        accountType: 'DEFAULT',
        userName: 'fakeUserName',
        email: 'fakeEmail@fake.com',
        createDate: '2022-03-12T21:06:52.589+00:00',
        session: {
          token: 'token web',
          expiration: "18000000",
          expirationDate: 'Fri Mar 18 21:36:50 CST 2022',
          refreshToken: 'refresh token web'
        }
      }
    };

    httpClientSpy.post.and.returnValue(of(user))

    authService.signIn({
      userName: 'user',
      password: 'password'
    }).subscribe(
      resp => {
        expect(resp)
          .withContext('expected UserModel')
          .toEqual(new UserModel(user.data));
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it(`sigIn empty data call`, (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(of(null))

    authService.signIn({
      userName: 'user',
      password: 'password'
    }).subscribe(
      resp => {
        expect(resp)
          .withContext('expected UserModel')
          .toEqual(new UserModel(undefined));
        done();
      },
      _ => {
        done.fail;
      }
    );

    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it(`signIn unauthorized call`, (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: 'No se encuentra el usuario',
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://fake.com'
    });
    httpClientSpy.post.and.returnValue(throwError(error));

    authService.signIn({
      userName: 'fake',
      password: 'fakePassword'
    }).subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain('No se encuentra el usuario');
        done();
      }
    );

    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it(`signIn when server doesn't response call`, (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: undefined,
      status: 0,
      statusText: 'Unknown Error',
      url: 'http://fake.com'
    });
    httpClientSpy.post.and.returnValue(throwError(error));

    authService.signIn({
      userName: 'fake',
      password: 'fakePassword'
    }).subscribe(
      _ => done.fail,
      error => {
        expect(error).toContain('Oops parece que hay un error en nuestros servidores, inténtalo mas tarde');
        done();
      }
    );

    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

});
