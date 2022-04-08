import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { SessionService, UrxSessionModule } from 'ng-urxnium';
import { SignInComponent } from './sign-in.component';
import { AuthRoutingModule } from '../auth-routing.module';
import { ServerErrorConst } from '../../../core/const/server-error.const';
import { AuthService } from '../../../core/http/auth.service';
import { UserModel } from '../../../core/models/user.model';

const unauthorizedErrorUser = {
  fieldNameError: 'userName',
  message: 'El usuario no existe'
};

const unauthorizedErrorPassword = {
  fieldNameError: 'password',
  message: 'El password es incorrecto'
};

const unauthorizedErrorUnknown = new HttpErrorResponse({
  error: {
    fieldNameError: 'userName22',
    message: 'El usuario no existe'
  },
  status: 401,
  statusText: 'Unauthorized',
  url: 'http://fake.com'
});

const unknownError = new HttpErrorResponse({
  status: 0,
  statusText: ServerErrorConst.unknownError,
  url: 'http://fake.com'
});

const setFormData = (form) => {
  form.get('userName').setValue('fakeUser');
  form.get('password').setValue('password');
}

describe('SignInComponent', () => {
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let sessionService: jasmine.SpyObj<SessionService>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    sessionService = jasmine.createSpyObj('SessionService', ['signIn']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['signIn']);

    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SignInComponent ],
      imports: [
        AuthRoutingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatProgressBarModule,
        UrxSessionModule
      ],
      providers: [
        {
          provide: SessionService,
          useValue: sessionService
        },{
          provide: AuthService,
          useValue: authServiceSpy
        },{
          provide: Router,
          useValue: router
        }
      ]
    }).compileComponents();
  });

  it(`should create`, () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`submit data to sign in`, () => {
    authServiceSpy.signIn.and.returnValue(of(new UserModel({ })));
    sessionService.signIn.and.returnValue(null);
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    setFormData(app.form);
    app.signIn();

    expect(router.navigate).toHaveBeenCalledWith(['/event']);
    expect(app.form.value).toEqual({ userName: 'fakeUser', password: 'password' });
    expect(authServiceSpy.signIn.calls.count()).toBe(1);
    expect(sessionService.signIn.calls.count()).toBe(1);
  });

  it(`submit data to sign in with bat information`, () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    app.form.get('userName').setValue('fakeUser');
    app.form.get('password').setValue('');
    app.signIn();

    expect(app.form.invalid).toBeTruthy();
  });

  it(`validate required fields`, () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    app.form.markAllAsTouched();
    fixture.detectChanges();
    const errors = fixture.nativeElement.getElementsByClassName('mat-error');

    expect(errors[0].innerText.trim()).toBe('El usuario es requerido');
    expect(errors[1].innerText.trim()).toBe('La contraseña es requerida');
  });

  it(`submit data to sign in but when user name doesn't exist`, () => {
    authServiceSpy.signIn.and.returnValue(throwError(unauthorizedErrorUser))
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    setFormData(app.form);
    app.signIn();

    expect(app.form.value).toEqual({ userName: 'fakeUser', password: 'password' });
    expect(authServiceSpy.signIn.calls.count()).toBe(1);
    expect(app.form.get('userName').getError('server')).toEqual(unauthorizedErrorUser.message);
  });

  it(`submit data to sign in but when password is bad`, () => {
    authServiceSpy.signIn.and.returnValue(throwError(unauthorizedErrorPassword));
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    setFormData(app.form);
    app.signIn();

    expect(app.form.value).toEqual({ userName: 'fakeUser', password: 'password' });
    expect(authServiceSpy.signIn.calls.count()).toBe(1);
    expect(app.form.get('password').getError('server')).toEqual(unauthorizedErrorPassword.message);
  });

  it(`submit data to sign in but the server doesn't response`, () => {
    authServiceSpy.signIn.and.returnValue(throwError(unknownError));
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    setFormData(app.form);
    app.signIn();

    expect(app.error['status']).toEqual(unknownError.status);
    expect(authServiceSpy.signIn.calls.count()).toBe(1);
  });

});
