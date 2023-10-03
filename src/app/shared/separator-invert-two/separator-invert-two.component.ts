import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-separator-invert-two',
  templateUrl: './separator-invert-two.component.html',
  styleUrls: ['./separator-invert-two.component.scss']
})
export class SeparatorInvertTwoComponent {
  primaryColor = environment.primaryColor;
}
