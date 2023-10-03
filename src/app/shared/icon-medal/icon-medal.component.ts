import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-icon-medal',
  templateUrl: './icon-medal.component.html',
  styleUrls: ['./icon-medal.component.scss']
})
export class IconMedalComponent {
  primaryColor: string = environment.primaryColor;
}
