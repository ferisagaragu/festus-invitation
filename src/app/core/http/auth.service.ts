import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(userData: any): Observable<any> {
    return this.http.post(
      'http://localhost:5000/rest/auth/sign-in',
      userData
    ).pipe(map((resp: any) => new UserModel(resp?.data)))
  }

}
