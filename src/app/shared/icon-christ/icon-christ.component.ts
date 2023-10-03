import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-icon-christ',
  templateUrl: './icon-christ.component.html',
  styleUrls: ['./icon-christ.component.scss']
})
export class IconChristComponent {
  primaryColor = environment.primaryColor;
}
