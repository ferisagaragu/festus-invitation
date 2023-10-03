import { Component, Input } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent {
  @Input() lang: string;
  hotels = environment.hotels;
  airbnbs = environment.airbnbs;
}
