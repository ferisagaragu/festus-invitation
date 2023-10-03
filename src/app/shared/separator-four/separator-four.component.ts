import { Component, Input } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-separator-four',
  templateUrl: './separator-four.component.html',
  styleUrls: ['./separator-four.component.scss']
})
export class SeparatorFourComponent {
  @Input() invert: boolean;
  primaryColor = environment.primaryColor;
}
