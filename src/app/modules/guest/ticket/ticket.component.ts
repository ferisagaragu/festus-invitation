import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvitationService } from '../../../core/http/invitation.service';
import { InvitationModel } from '../../../core/models/invitation.model';
import { GuestModel } from '../../../core/models/guest.model';
import { environment } from "../../../../environments/environment";

declare const qrcode;

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements AfterViewInit {

  guestUuid: string;
  guests: Array<GuestModel>;
  invitation: any;
  load: boolean;
  lang: string;
  qr = environment.qr;
  title = environment.invitationName;
  ticketLocation = environment.ticketLocation;
  ticketNameColor = environment.ticketNameColor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private invitationService: InvitationService
  ) {
    this.guestUuid = this.activatedRoute.snapshot.params.guestUuid;
    this.load = true;

    if (!environment.fakeTickets) this.invitationService.findAllInvitation(this.guestUuid).subscribe((resp: InvitationModel) => {
      this.load = false;
      const out = [];

      this.lang = resp.lang;
      resp.guests.forEach(guest => {
        if (guest.status === 2 || environment.onlyTickets) out.push(guest);
      });

      this.guests = out;
      this.invitation = resp;
    });

    if (environment.fakeTickets) {
      const out = [];
      this.invitation = new InvitationModel({
        familyName: 'Fake Family',
        guests: [
          {
            name: 'One ticket fake',
            status: 2
          },
          {
            name: 'Two ticket fake',
            status: 2
          },
          {
            name: 'Tree ticket fake',
            status: 1
          }
        ],
        uuid: 'void',
        send: true
      });

      this.invitation.guests.forEach(guest => {
        if (guest.status === 2 || environment.onlyTickets) out.push(guest);
      });

      this.guests = out;
      this.load = false;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.guests?.forEach((guest: any, index) => {
        const typeNumber = 4;
        const errorCorrectionLevel = 'L';
        const qr = qrcode(typeNumber, errorCorrectionLevel);

        qr.addData(this.invitation.uuid + "|" + index );
        qr.make();

        document.getElementById('qr-' + index).innerHTML = qr.createSvgTag().replace('black', environment.qrColor);
      });
    }, 200);
  }


}
