import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-come-message',
  templateUrl: './come-message.component.html',
  styleUrls: ['./come-message.component.scss']
})
export class ComeMessageComponent {
  comeMessage = environment.comeMessage;
  comeMessageAppointment = environment.comeMessageAppointment;
}
