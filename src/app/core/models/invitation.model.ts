import { GuestModel } from './guest.model';

export class InvitationModel {

  uuid: string;
  createdDate: Date;
  familyName: string;
  guestOf: string;
  send: boolean;
  guests: Array<GuestModel>
  lang: string;

  constructor(data: InvitationModel | any) {
    Object.assign(this, data);
  }

}
