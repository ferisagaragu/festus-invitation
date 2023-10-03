import { Component, Input } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-whatsapp-confirmation',
  templateUrl: './whatsapp-confirmation.component.html',
  styleUrls: ['./whatsapp-confirmation.component.scss']
})
export class WhatsappConfirmationComponent {
  @Input() lang: string;

  whatsappTitle = environment.whatsappTitle;
  whatsappUrl = environment.whatsappUrl;
  whatsappButtonTitle = environment.whatsappButtonTitle;
  whatsappUrlBoth = environment.whatsappUrlBoth;
  type = environment.type;

  onConfirm(number: number) {
    if (number === 0) {
      const link = document.createElement('a');
      link.href = this.whatsappUrl;
      link.click();
    } else {
      const link = document.createElement('a');
      link.href = this.whatsappUrlBoth;
      link.click();
    }
  }

}
