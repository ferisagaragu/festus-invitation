import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {

  itinerary = environment.itinerary;

  constructor() { }

  ngOnInit(): void {
  }

}
