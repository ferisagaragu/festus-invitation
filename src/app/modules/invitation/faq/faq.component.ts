import { Component, Input, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() lang: string;
  type = environment.type;

  constructor() { }

  ngOnInit(): void {
  }

}
