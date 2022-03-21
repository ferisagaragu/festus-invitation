import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { SignInComponent } from './sign-in.component';
import { AuthRoutingModule } from '../auth-routing.module';

describe('SignInComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

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
        MatToolbarModule,
        MatIconModule,
        MatProgressBarModule
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => { });

  it('should create', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('submit data to sign in', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.ngOnInit();

    app.form.get('userName').setValue('fakeUser');
    app.form.get('password').setValue('password');
    httpClientSpy.post.and.returnValue(of({ }));
    app.signIn();

    expect(app.form.value).toEqual({ userName: 'fakeUser', password: 'password' });
    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('submit data to sign in with bat information', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.ngOnInit();

    app.form.get('userName').setValue('fakeUser');
    app.form.get('password').setValue('');
    app.signIn();

    expect(app.form.value).toEqual({ userName: 'fakeUser', password: '' });
  });

  it('validate required fields', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.ngOnInit();

    app.form.markAllAsTouched();
    fixture.detectChanges();
    const errors = fixture.nativeElement.getElementsByClassName('mat-error')

    expect(errors[0].innerText.trim()).toBe('El usuario es requerido');
    expect(errors[1].innerText.trim()).toBe('La contraseña es requerida');
  });

  it(`submit data to sign in but when user name doesn't exist`, () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();

    app.form.get('userName').setValue('fakeUser');
    app.form.get('password').setValue('password');
    const error = new HttpErrorResponse({
      error: {
        fieldNameError: 'userName',
        message: 'El usuario no existe'
      },
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://fake.com'
    });
    httpClientSpy.post.and.returnValue(throwError(error));
    app.signIn();

    expect(app.form.value).toEqual({ userName: 'fakeUser', password: 'password' });
    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it(`submit data to sign in but when user name doesn't exist`, () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();

    app.form.get('userName').setValue('fakeUser');
    app.form.get('password').setValue('password');
    const error = new HttpErrorResponse({
      error: {
        fieldNameError: 'password',
        message: 'El password es incorrecto'
      },
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://fake.com'
    });
    httpClientSpy.post.and.returnValue(throwError(error));
    app.signIn();

    expect(app.form.value).toEqual({ userName: 'fakeUser', password: 'password' });
    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

});
