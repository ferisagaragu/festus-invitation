import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-title-flower',
  templateUrl: './title-flower.component.html',
  styleUrls: ['./title-flower.component.scss']
})
export class TitleFlowerComponent {
  decoratorColor = environment.titleDecoratorColor;
  showDecorator = environment.showDecorator;
  demo = environment.demo;
}
