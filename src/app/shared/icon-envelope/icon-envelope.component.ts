import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-icon-envelope',
  templateUrl: './icon-envelope.component.html',
  styleUrls: ['./icon-envelope.component.scss']
})
export class IconEnvelopeComponent implements OnInit {

  primaryColor: string;

  constructor() {
    this.primaryColor = environment.primaryColor;
  }

  ngOnInit(): void {
  }

}
