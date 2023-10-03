import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GoogleMapsService } from "ng-urxnium";
import { environment } from "../../../../environments/environment";
import * as moment from "moment";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements AfterViewInit {

  @Input() lang: string;
  @ViewChild('churchTimeSpan') churchTimeSpan: ElementRef;
  @ViewChild('eventTimeSpan') eventTimeSpan: ElementRef;


  churchDate: string = moment(environment.weddingDay).format('dddd D [de] MMMM YYYY');
  churchAddress: string;
  churchTitle: string = environment.weddingLocation.title;
  churchLat = environment.weddingLocation.lat;
  churchLng = environment.weddingLocation.lng;
  churchCorner = environment.imageCornerLeft;
  churchMainTitle = environment.weddingLocation.mainTitle;
  churchLocation = environment.weddingLocation.location;
  churchLink = environment.weddingLocation.link;

  eventDate: string = moment(environment.eventDay).format('dddd D [de] MMMM YYYY');
  eventAddress: string;
  eventTitle: string = environment.eventLocation.title;
  eventLat = environment.eventLocation.lat;
  eventLng = environment.eventLocation.lng;
  eventCorner = environment.imageCornerRight;
  eventMainTitle = environment.eventLocation.mainTitle;
  eventLocation = environment.eventLocation.location;
  eventLink = environment.eventLocation.link;
  itinerary = environment.itinerary;

  calendarLink = environment.calendarLink;

  type = environment.type;

  weddingMap = environment.weddingLocation.map;
  eventMap = environment.eventLocation.map;

  constructor(private googleMapsService:GoogleMapsService) {
    this.googleMapsService.findAddressByLatLng(
      environment.weddingLocation.lat,
      environment.weddingLocation.lng
    ).subscribe(resp => {
      this.churchAddress = resp?.results[0].formatted_address;
    });

    this.googleMapsService.findAddressByLatLng(
      environment.eventLocation.lat,
      environment.eventLocation.lng
    ).subscribe(resp => {
      this.eventAddress = resp?.results[0]?.formatted_address;
    });
  }

  openLink(type: number): void {
    if (type === 0) {
      const link = document.createElement('a');
      link.href = environment.weddingLocation.link;
      link.click();
    } else {
      const link = document.createElement('a');
      link.href = environment.eventLocation.link;
      link.click();
    }
  }

  ngAfterViewInit(): void {
    if (this.churchTimeSpan) this.churchTimeSpan.nativeElement.innerHTML = environment.weddingTime;
    if (this.eventTimeSpan) this.eventTimeSpan.nativeElement.innerHTML = environment.eventTime;
  }

}
