import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() lang: string;
  month: number;
  week: number;
  days: number;

  type = environment.type;
  invitationName = environment.invitationName;

  constructor() {
    this.month = 0;
    this.week = 0;
    this.days = 0;
  }

  ngOnInit(): void {
    setInterval(() => {
      const time = moment(environment.weddingDay);
      this.month = time.diff(new Date(), 'months');
      this.week = time.diff(new Date(), 'weeks');
      this.days = time.diff(new Date(), 'days');
    }, 1000);
  }

}
