import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-separator-invert-trhee',
  templateUrl: './separator-invert-trhee.component.html',
  styleUrls: ['./separator-invert-trhee.component.scss']
})
export class SeparatorInvertTrheeComponent {
  decoratorColor = environment.decoratorColor;
  decoratorSecondColor = environment.decoratorSecondColor;
}
