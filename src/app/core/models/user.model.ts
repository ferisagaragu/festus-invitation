import { Session } from 'ng-urxnium';

export class UserModel {

  uuid: string;
  name: string;
  surname: string;
  motherSurname: string;
  photo: string;
  accountType: string;
  userName: string;
  email: string;
  createDate: Date;
  session: Session;

  constructor(data: UserModel | any) {
    Object.assign(this, data);
  }

}
