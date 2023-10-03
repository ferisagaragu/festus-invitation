import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wedding-invitation';

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
    document.title = `Mi invitación ${environment.initials}`
  }

}
