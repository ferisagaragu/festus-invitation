import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event.model';
import { headers } from './headers.http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  findAllEvents(): Observable<Array<EventModel>> {
    return this.http.get(
      `${environment.baseUrl}/events`,
      { headers }
    ).pipe(map((resp: any) => resp?.data?.map(data => new EventModel(data))));
  }

}
