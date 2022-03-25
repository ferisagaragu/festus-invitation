import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';

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
      catchError(err => err.statusText !== ServerErrorEnum.unknownError ?
        throwError(err.error) :
        throwError(ServerErrorEnum.message)
      )
    );
  }

}
