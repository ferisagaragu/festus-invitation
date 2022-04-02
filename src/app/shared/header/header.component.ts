import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from 'ng-urxnium';
import { UserModel } from '../../core/models/user.model';
import { FormConfigUserComponent } from '../form-config-user/form-config-user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: UserModel;
  showToolbar: boolean;
  loadApp: boolean;

  constructor(
    private sessionService: SessionService,
    private dialog: MatDialog,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.validateSession();
  }

  openConfigUser(): void {
    this.dialog.open(
      FormConfigUserComponent,
      {
        width: '500px',
        height: '550px',
        backdropClass: 'scroll'
      }
    );
  }

  signOut(): void {
    this.sessionService.signOut();
    this.route.navigate(['/']);
  }

  private validateSession(): void {
    this.sessionService.onSignIn.subscribe(resp => {
      this.showToolbar = resp;
      this.user = this.sessionService.getUser();
    });
    this.sessionService.onValidateTokenLoad.subscribe(resp => this.loadApp = resp);
  }

}
