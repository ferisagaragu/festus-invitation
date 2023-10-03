import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-ticket-status',
  templateUrl: './view-ticket-status.component.html',
  styleUrls: ['./view-ticket-status.component.scss']
})
export class ViewTicketStatusComponent {

  @Input() code: number;

}
