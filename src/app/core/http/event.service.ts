import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event.model';
import { getHeaders } from './headers.http';
import { environment } from '../../../environments/environment';
import { validateServerErrorFunction } from '../functions/validate-server-error.function';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  findAllEvents(uuid?: string): Observable<Array<EventModel> | EventModel> {
    return this.http.get(
      `${environment.baseUrl}/events/${uuid ? uuid : ''}`,
      { headers: getHeaders() }
    ).pipe(
      uuid ? map((resp: any) => resp?.data ? new EventModel(resp.data) : undefined) :
      map((resp: any) => resp?.data?.map(data => new EventModel(data))),
      catchError(err => validateServerErrorFunction(err))
    );
  }

  createEvent(event: EventModel): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/events`,
      { ...event },
      { headers: getHeaders() }
    ).pipe(
      catchError(err => validateServerErrorFunction(err))
    );
  }

  updateEvent(uuid: string, event: EventModel): Observable<any> {
    return this.http.put(
      `${environment.baseUrl}/events/${uuid}`,
      { ...event },
      { headers: getHeaders() }
    ).pipe(
      catchError(err => validateServerErrorFunction(err))
    );
  }

  deleteEvent(uuid: string): Observable<any> {
    return this.http.delete(
      `${environment.baseUrl}/events/${uuid}`,
      { headers: getHeaders() }
    ).pipe(
      catchError(err => validateServerErrorFunction(err))
    )
  }

}
