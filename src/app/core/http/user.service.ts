import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { getHeaders } from './headers.http';
import { UserModel } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { validateServerErrorFunction } from '../functions/validate-server-error.function';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  refreshUserImage(): Observable<string> {
    return this.http.get(
      `${environment.baseUrl}/users/refresh-user-image`,
      { headers: getHeaders() }
    ).pipe(
      map((resp: any) => resp.data),
      catchError(err => validateServerErrorFunction(err))
    );
  }

  updateUser(user: UserModel): Observable<any> {
    return this.http.put(
      `${environment.baseUrl}/users`,
      { ...user },
      { headers: getHeaders() }
    ).pipe(catchError(err => validateServerErrorFunction(err)));
  }

}
