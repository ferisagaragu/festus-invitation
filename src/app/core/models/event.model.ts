export class EventModel {

  uuid: string;
  name: string;
  description: string;
  price: number;
  urlDataBase: string;
  endPointInvitation: string;
  primaryColor: string;
  accentColor: string;
  customTicket: boolean;
  remainingDay: number;
  missingDay: number;
  percentage: number;
  endDate: Date;
  createDate: Date;

  constructor(data: EventModel | any) {
    Object.assign(this, data)
  }

}
