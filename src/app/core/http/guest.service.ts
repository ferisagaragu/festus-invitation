import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { InvitationModel } from '../models/invitation.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GuestStatusEnum } from '../enums/guest-status.enum';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  findAllGuest(invitationUuid: string, guestIndex: string) {
    return this.http.get(`${environment.baseDBUrl}/${invitationUuid}/guests/${guestIndex}.json`);
  }

  changeStatus(invitation: InvitationModel) {
    return this.http.put(
      `${environment.baseDBUrl}/${invitation.uuid}.json`,
      invitation
    );
  }

  deleteGuest(uuid: string) {
    return this.http.delete(`http://localhost:5000/rest/guests/${uuid}`);
  }

}
