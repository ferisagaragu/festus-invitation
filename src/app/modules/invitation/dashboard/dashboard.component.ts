import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvitationService } from '../../../core/http/invitation.service';
import { InvitationModel } from '../../../core/models/invitation.model';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  invitation: InvitationModel;
  load: boolean;
  preTitle = environment.preTitle;
  openEnvelope: boolean;
  developMode = environment.developMode;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private invitationService: InvitationService
  ) {
    this.invitation = null;
    this.load = false;
  }

  ngOnInit(): void {
    this.load = true;

    this.activatedRoute.params.subscribe(params => {
      if (params.guestUuid === 'void') {
        this.invitation = new InvitationModel({
          familyName: '???',
          guests: []
        });

        if (environment.fakeTickets) {
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
        }

        this.load = false;
      } else {
        this.invitationService.findAllInvitation(params.guestUuid).subscribe(resp => {
          this.invitation = resp as InvitationModel;
          this.load = false;
          if (environment.onlyTickets) this.router.navigate(['guest/ticket/', this.invitation.uuid]);
        });
      }
    });


  }

}
