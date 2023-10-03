export class GuestModel {

  uuid: string;
  createdDate: Date;
  name: string;
  surname: string;
  motherSurname: string;
  confirmDate: Date;
  status: number;
  familyName: string;

  constructor(data: GuestModel | any) {
    Object.assign(this, data);
  }

}
