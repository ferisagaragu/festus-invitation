import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  findAllEvents(): Observable<Array<EventModel>> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6W10sInN1YiI6ImZlcm5ueXBheTk1IiwiaWF0IjoxNjQ3NTc5MzIyLCJleHAiOjE2NDc1OTczMjJ9.JqvjPdKsyWffkHRYrYA0VIYKyC_KCY5gen4qXc_aUIpwgKEhfgL68PcyxZWW7d_Hn_dw9rAB2hWzipBBoLuwAw`
    );

    return this.http.get(
      `http://localhost:5000/rest/events`,
      { headers }
    ).pipe(map((resp: any) => resp?.data?.map(data => new EventModel(data))));
  }

}
