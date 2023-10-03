import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-separator-two',
  templateUrl: './separator-two.component.html',
  styleUrls: ['./separator-two.component.scss']
})
export class SeparatorTwoComponent {
  primaryColor = environment.primaryColor;
}
