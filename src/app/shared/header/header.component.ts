import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'ng-urxnium';
import { UserModel } from '../../core/models/user.model';

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
    private route: Router
  ) { }

  ngOnInit(): void {
    this.validateSession();
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
