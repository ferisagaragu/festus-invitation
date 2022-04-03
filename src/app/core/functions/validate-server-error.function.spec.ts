import { HttpErrorResponse } from '@angular/common/http';
import { validateServerErrorFunction } from './validate-server-error.function';

describe('ValidateServerError', () => {

  it('should create and function', (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: {
        fieldNameError: 'password',
        message: 'El password es incorrecto'
      },
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://fake.com'
    });

    validateServerErrorFunction(error).subscribe(
      _ => done.fail,
      error => {
        expect(error).toBe('El password es incorrecto');
        done();
      }
    );
  });

  it('should create and function whit complete trace', (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: {
        fieldNameError: 'password',
        message: 'El password es incorrecto'
      },
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://fake.com'
    });

    validateServerErrorFunction(error, true).subscribe(
      _ => done.fail,
      error => {
        expect(error.fieldNameError).toBe('password');
        done();
      }
    );
  });

});
