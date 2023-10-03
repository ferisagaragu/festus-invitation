import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-title-leaf',
  templateUrl: './title-leaf.component.html',
  styleUrls: ['./title-leaf.component.scss']
})
export class TitleLeafComponent {
  decoratorColor = environment.titleDecoratorColor;
  showDecorator = environment.showDecorator;
  demo = environment.demo;
}
