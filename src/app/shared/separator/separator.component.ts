import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss']
})
export class SeparatorComponent implements OnInit {

  primaryColor: string;

  constructor() {
    this.primaryColor = environment.primaryColor;
  }

  ngOnInit(): void {
  }

}
