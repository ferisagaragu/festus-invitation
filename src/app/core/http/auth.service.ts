import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { validateServerErrorFunction } from '../functions/validate-server-error.function';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(userData: any): Observable<UserModel> {
    return this.http.post(
      `${environment.baseUrl}/auth/sign-in`,
      userData
    ).pipe(
      map((resp: any) => new UserModel(resp?.data)),
      catchError(err => validateServerErrorFunction(err, true))
    );
  }

}
