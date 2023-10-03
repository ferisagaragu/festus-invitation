import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-separator-invert',
  templateUrl: './separator-invert.component.html',
  styleUrls: ['./separator-invert.component.scss']
})
export class SeparatorInvertComponent implements OnInit {

  primaryColor: string;

  constructor() {
    this.primaryColor = environment.primaryColor;
  }

  ngOnInit(): void {
  }

}
