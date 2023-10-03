import { Component } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-biblical-quote',
  templateUrl: './biblical-quote.component.html',
  styleUrls: ['./biblical-quote.component.scss']
})
export class BiblicalQuoteComponent {
  biblicalQuote = environment.biblicalQuote;
  biblicalQuoteFrom = environment.biblicalQuoteFrom;
}
