import { TestBed } from '@angular/core/testing';
import { FormConfigUserComponent } from './form-config-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SessionService } from 'ng-urxnium';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { InputUserIconComponent } from '../input-user-icon/input-user-icon.component';
import { UserService } from '../../core/http/user.service';

class SessionServiceMock {
  getUser() {
    return {
      uuid: '2f965d78-dc13-4b66-97b0-2bcd9c13b79d',
      name: 'Fernando Isaías',
      surname: 'García',
      motherSurname: 'Aguirre',
      photo: 'https://fake',
      accountType: 'DEFAULT',
      userName: 'fernnypay95',
      email: 'ferisagaragu@gmail.com',
      createDate: '2022-03-22T21:43:44.580+00:00',
      team: null
    }
  }

  signOut() { }
}

const unauthorizedError = new HttpErrorResponse({
  error: {
    message: 'No esta autorizado para realizar esta acción'
  },
  status: 401,
  statusText: 'Unauthorized',
  url: 'http://fake.com'
});

const userFormData = {
  photo: 'http://fake-link',
  name: 'FakeName',
  surname: 'FakeSurname',
  motherSurname: 'FakeMotherSurname'
}

describe('FormConfigUserComponent', () => {
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let location = { reload: () => {} };

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['updateUser']);

    await TestBed.configureTestingModule({
      declarations: [
        FormConfigUserComponent,
        InputUserIconComponent
      ],
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: SessionService,
          useValue: new SessionServiceMock()
        },{
          provide: UserService,
          useValue: userServiceSpy
        },{
          provide: 'location',
          useValue: location
        }
      ]
    }).compileComponents();
  });

  it(`should create`, () => {
    const fixture = TestBed.createComponent(FormConfigUserComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`when save the form`, () => {
    const fixture = TestBed.createComponent(FormConfigUserComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    userServiceSpy.updateUser.and.returnValue(of({ status: 200 }));
    component.form.reset(userFormData);
    fixture.detectChanges();
    component.save();

    expect(userServiceSpy.updateUser.calls.count()).toBe(1);
  });

  it(`when save the form without necessary info`, () => {
    const fixture = TestBed.createComponent(FormConfigUserComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    userServiceSpy.updateUser.and.returnValue(of({ status: 200 }));
    component.form.reset({
      ...userFormData,
      motherSurname: null
    });
    fixture.detectChanges();
    component.save();

    expect(component.form.invalid).toBeTruthy();
  });

  it(`when save the form reject service`, () => {
    const fixture = TestBed.createComponent(FormConfigUserComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    userServiceSpy.updateUser.and.returnValue(throwError(unauthorizedError));
    component.form.reset(userFormData);
    fixture.detectChanges();
    component.save();

    expect(userServiceSpy.updateUser.calls.count()).toBe(1);
  });

  it(`validate required fields`, () => {
    const fixture = TestBed.createComponent(FormConfigUserComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.form.reset({});
    app.form.markAllAsTouched();
    fixture.detectChanges();

    const errors = fixture.nativeElement.getElementsByTagName('mat-error');

    expect(errors[0].innerText.trim()).toBe('El nombre es requerido');
    expect(errors[1].innerText.trim()).toBe('El apellido paterno es requerido');
    expect(errors[2].innerText.trim()).toBe('El apellido materno es requerido');
  });

});
