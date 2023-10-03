import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-icon-heart',
  templateUrl: './icon-heart.component.html',
  styleUrls: ['./icon-heart.component.scss']
})
export class IconHeartComponent {
  primaryColor: string = environment.primaryColor;
}
