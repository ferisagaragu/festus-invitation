import { Component, OnInit } from '@angular/core';
import { InvitationService } from '../../../core/http/invitation.service';
import { InvitationModel } from '../../../core/models/invitation.model';
import { environment } from "../../../../environments/environment";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.scss']
})
export class ListGuestComponent implements OnInit {

  originalInvitations: Array<InvitationModel>;
  invitations: Array<InvitationModel>;
  adults: number;
  children: number;
  accept: number;
  notAccept: number;
  baseUrl: string;
  onlyTickets = environment.onlyTickets;

  constructor(
    public invitationService: InvitationService,
    private snackBar: MatSnackBar
  ) {
    this.adults = 0;
    this.children = 0;
    this.accept = 0;
    this.notAccept = 0;
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit(): void {
    this.invitationService.findAllInvitations().subscribe(resp => {
      this.invitations = resp;
      this.originalInvitations = resp;

      this.invitations.forEach(invitation => {
        invitation.guests.forEach(guest => {
          if (!guest.name.includes('niñ@')) {
            this.adults = this.adults + 1;
          }

          if (guest.name.includes('niñ@')) {
            this.children = this.children + 1;
          }

          if (guest.status === 2) {
            this.accept = this.accept + 1;
          }

          if (guest.status !== 2) {
            this.notAccept = this.notAccept + 1;
          }
        });
      });
    });
  }

  search(searchInput: HTMLInputElement) {
    if (!searchInput.value) {
      this.invitations = this.originalInvitations;
    }

    this.invitations = this.originalInvitations.filter(
      invitation => invitation.familyName.toUpperCase().includes(
        searchInput.value.toUpperCase()
      )
    );
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.snackBar.open('URL copiada en el portapapeles', undefined, { duration: 3000 });
  }

}
