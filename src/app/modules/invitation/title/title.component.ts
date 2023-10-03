import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { GoogleMapsService } from "ng-urxnium";
import * as moment from "moment";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() lang: string;

  type = environment.type;
  title = environment.title;
  primaryColor = environment.primaryColor;
  invitationName: string = environment.invitationName;
  month: string = moment(environment.weddingDay).format('MMMM');
  day: any = moment(environment.weddingDay).format('D');
  year: string = moment(environment.weddingDay).format('yyyy');
  invertNames = environment.invertNames;

}
