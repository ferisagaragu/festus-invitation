export class EventModel {

  uuid: string;
  firstCoupleName: string;
  secondCoupleName: string;
  name: string;
  description: string;
  providerUrl: string;
  providerType: string;
  endPointInvitation: string;
  primaryColor: string;
  secondaryColor: string;
  customTicket: boolean;
  price: number;
  type: Array<string>;
  advance: string;
  remaining: string;
  endDate: Date;
  eventDate: Date;
  createDate: Date;
  remainingDay: number;
  percentage: number;
  missingDay: number;

  constructor(data: EventModel | any) {
    Object.assign(this, data)
  }

}
