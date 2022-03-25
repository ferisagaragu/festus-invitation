import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../core/http/event.service';
import { EventModel } from '../../../core/models/event.model';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent implements OnInit {

  events: Array<EventModel>;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.findAllEvents();
  }

  findAllEvents(): void {
    this.eventService.findAllEvents().subscribe(resp => {
      this.events = resp;
    });
  }

}
