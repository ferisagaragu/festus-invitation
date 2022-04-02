import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../core/http/event.service';
import { EventModel } from '../../../core/models/event.model';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent implements OnInit {

  originalEvents: Array<EventModel>;
  events: Array<EventModel>;
  load: boolean;
  search: boolean;
  error: string;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.findAllEvents();
  }

  findAllEvents(): void {
    this.load = true;

    this.eventService.findAllEvents().subscribe(resp => {
      this.originalEvents = resp;
      this.events = resp;
      this.load = false;
    }, error => this.error = error );
  }

  findOnEvents(searchInput: HTMLInputElement): void {
    if (searchInput.value === '') {
      this.restoreSearchFilter();
      return;
    }

    this.search = true;
    this.events = this.originalEvents.filter(
      event => event.name.toLowerCase().includes(searchInput.value)
    );
  }

  restoreSearchFilter(searchInput?: HTMLInputElement): void {
    if (searchInput) searchInput.value = '';
    this.events = this.originalEvents;
    this.search = false;
  }

}
