import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../../core/http/guest.service';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-scanner-ticket',
  templateUrl: './scanner-ticket.component.html',
  styleUrls: ['./scanner-ticket.component.scss']
})
export class ScannerTicketComponent {

  code: number;
  pauseScanner: boolean;
  showResponse: boolean;
  load: boolean;

  count = 0;

  constructor(
    private guestService: GuestService,
    private dialog: MatDialog
  ) {
    this.code = null;
  }

  onScan(event: any) {
    if (this.count == 1) {
      this.count = 0;
      return;
    }

    this.load = true;
    this.count++;

    if (event?.includes("|")) {
      console.log(event.split("|")[0], event.split("|")[1])
      const invitationUuid = event.split("|")[0];
      const guestIndex = event.split("|")[1];

      this.guestService.findAllGuest(invitationUuid, guestIndex).subscribe(
        resp => {
          console.log(resp)
          this.showStatusDisplay(0);
        }, error => {
          console.log(error)
          this.showStatusDisplay(1);
        }
      )
    } else {
      this.showStatusDisplay(2);
    }
  }

  showStatusDisplay(code: number): void {
    this.pauseScanner = true;
    this.showResponse = true;
    this.load = false;
    this.code = code;

    setTimeout(() => {
      this.showResponse = false;
      this.pauseScanner = false;
    }, 2000);
  }

}
