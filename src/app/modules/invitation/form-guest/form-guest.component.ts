import { Component, Input, OnInit } from '@angular/core';
import { InvitationModel } from '../../../core/models/invitation.model';
import { GuestModel } from '../../../core/models/guest.model';
import { SweetAlert2Service } from 'ng-urxnium';
import {
  generateGuestListFunction,
  generateGuestListFunctionEn
} from '../../../core/functions/generate-guest-list.function';
import { GuestService } from '../../../core/http/guest.service';
import { InvitationService } from '../../../core/http/invitation.service';
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-form-guest',
  templateUrl: './form-guest.component.html',
  styleUrls: ['./form-guest.component.scss']
})
export class FormGuestComponent implements OnInit {
  @Input() lang: string;

  @Input() invitation: InvitationModel;

  guests: Array<GuestModel>;
  load: boolean;
  guestUuid: string;
  type = environment.type;

  constructor(
    private swal: SweetAlert2Service,
    private guestService: GuestService,
    private invitationService: InvitationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.guestUuid = this.activatedRoute.snapshot.params.guestUuid;
  }

  ngOnInit() {
    this.guests = this.invitation.guests;
  }

  onSendDecision(): void {
    this.swal.fire({
      icon: 'warning',
      title: this.lang == 'en' ? 'Are you sure of your decision?' : '¿Estas segur@ de tu decision?',
      text: this.lang == 'en' ? generateGuestListFunctionEn(this.guests) : generateGuestListFunction(this.guests),
      showCancelButton: true,
      materialButtonsColor: '#D0B072',
      theme: 'material',
      cancelButtonText: this.lang == 'en' ? 'Cancel' : 'Cancelar',
      confirmButtonText: this.lang == 'en' ? 'Confirm' : 'Confirmar'
    }).subscribe(resp => {
      if (resp) {
        this.invitation.send = true;
        this.load = true;

        this.guestService.changeStatus(this.invitation).subscribe(_ => {
          this.load = false;
          this.generateTicket()
        });
      }
    });
  }

  generateTicket(): void {
    this.router.navigate(['guest/ticket', this.guestUuid]);
  }

  getAllResponse() {
    let resp = false;

    this.invitation?.guests?.forEach(guest => {
      resp = (guest.status === 2) || resp;
    })

    return resp;
  }

}
