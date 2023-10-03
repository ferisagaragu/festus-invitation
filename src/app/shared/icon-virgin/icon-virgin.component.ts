import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-icon-virgin',
  templateUrl: './icon-virgin.component.html',
  styleUrls: ['./icon-virgin.component.scss']
})
export class IconVirginComponent {
  primaryColor: string = environment.primaryColor;
}
