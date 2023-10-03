import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-separator-trhee',
  templateUrl: './separator-trhee.component.html',
  styleUrls: ['./separator-trhee.component.scss']
})
export class SeparatorTrheeComponent {
  decoratorColor = environment.decoratorColor;
  decoratorSecondColor = environment.decoratorSecondColor;
}
