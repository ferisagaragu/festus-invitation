import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { getHeaders } from './headers.http';
import { ServerErrorEnum } from '../enum/server-error.enum';
import { UserModel } from '../models/user.model';
import { environment } from '../../../environments/environment';

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
      catchError(err => err.statusText !== ServerErrorEnum.unknownError ?
        throwError(err.error.message) :
        throwError(ServerErrorEnum.message)
      )
    );
  }

  updateUser(user: UserModel): Observable<any> {
    return this.http.put(
      `${environment.baseUrl}/users`,
      { ...user },
      { headers: getHeaders() }
    ).pipe(
      catchError(err => err.statusText !== ServerErrorEnum.unknownError ?
        throwError(err.error.message) :
        throwError(ServerErrorEnum.message)
      )
    );
  }

}
