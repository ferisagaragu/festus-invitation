import { Component, Input } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-guest-message',
  templateUrl: './guest-message.component.html',
  styleUrls: ['./guest-message.component.scss']
})
export class GuestMessageComponent {

  @Input() familyName: string;
  @Input() lang: string;

  type = environment.type;

  getGuestMessage(familyName: string): string {
    if (this.type !== 'wedding' && familyName.includes('???')) {
      return 'Quiero invitarte';
    }

    if (familyName.includes('???')) {
      return 'Queremos invitarte'
    }

    if (familyName.includes('*')) {
      return 'Queremos invitarte'
    }

    if (familyName) {
      return 'Queremos invitarlos a ustedes la familia'
    }

    return 'Queremos invitarte';
  }

}
