import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { EventModel } from '../models/event.model';
import { getHeaders } from './headers.http';
import { environment } from '../../../environments/environment';
import { ServerErrorEnum } from '../enum/server-error.enum';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  findAllEvents(): Observable<Array<EventModel>> {
    return this.http.get(
      `${environment.baseUrl}/events`,
      { headers: getHeaders() }
    ).pipe(
      map((resp: any) => resp?.data?.map(data => new EventModel(data))),
      catchError(err => err.statusText !== ServerErrorEnum.unknownError ?
        throwError(err.error.message) :
        throwError(ServerErrorEnum.message)
      )
    );
  }

}
