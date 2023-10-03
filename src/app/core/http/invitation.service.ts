import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { InvitationModel } from '../models/invitation.model';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private http: HttpClient) { }

  findAllInvitation(query?: string): Observable<Array<InvitationModel> | InvitationModel> {
    return this.http.get(`${environment.baseDBUrl}${query ? query : ''}.json`)
      .pipe(map((resp: any) => new InvitationModel(resp)));
  }

  findAllInvitations(): Observable<Array<InvitationModel>> {
    return this.http.get(`${environment.baseDBUrl}/.json`)
      .pipe(map((resp: any) => {
        const out = [];

        for (let key in resp) {
          if (resp.hasOwnProperty(key)) {
            out.push(new InvitationModel(resp[key]));
          }
        }

        return out;
      }));
  }

  generateTickets(guests: Array<string>): Observable<string> {
    return this.http.post(
      `${environment.baseTicketUrl}/public/invitations/lizbeth-francisco`,
      guests,
      { responseType: 'blob' }
    ).pipe(map(resp => URL.createObjectURL(resp)));
  }

}
