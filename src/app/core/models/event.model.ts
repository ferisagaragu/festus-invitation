export class EventModel {

  uuid: string;
  name: string;
  description: string;
  urlDataBase: string;
  endPointInvitation: string;
  primaryColor: string;
  accentColor: string;
  customTicket: boolean;
  endDate: Date;
  createDate: Date;

  constructor(data: EventModel | any) {
    Object.assign(this, data)
  }

}
