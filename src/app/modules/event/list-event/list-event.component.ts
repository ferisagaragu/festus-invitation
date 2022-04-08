import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SweetAlert2Service } from 'ng-urxnium';
import { EventService } from '../../../core/http/event.service';
import { EventModel } from '../../../core/models/event.model';
import { EventMessageConst } from '../../../core/const/event-message.const';

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
  showDone: boolean;
  error: string;
  deleteUuid: string;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private swal: SweetAlert2Service,
    public snack: MatSnackBar
  ) {
    this.deleteUuid = this.activatedRoute.snapshot.params?.uuid;
  }

  ngOnInit(): void {
    this.findAllEvents();
    this.isEnableRemove();
  }

  findAllEvents(): void {
    this.load = true;

    this.eventService.findAllEvents().subscribe((resp: Array<EventModel>) => {
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
      event => event.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  }

  restoreSearchFilter(searchInput?: HTMLInputElement): void {
    if (searchInput) searchInput.value = '';
    this.events = this.originalEvents;
    this.search = false;
  }

  isEnableRemove(): void {
    if (this.deleteUuid) this.swal.fire({
      icon: 'warning',
      title: EventMessageConst.removeDialogTitle,
      text: EventMessageConst.removeDialogMessage,
      confirmButtonText: '👍Ok',
      cancelButtonText: '😉Mejor no',
      theme: 'material',
      showCancelButton: true,
      focusCancel: true,
      materialButtonsColor: '#3f51b5'
    }).subscribe(resp => {
      if (resp) this.eventService.deleteEvent(
        this.deleteUuid
      ).subscribe(_ => {
        this.findAllEvents();
        this.snack.open('El evento se borro correctamente', '👌Ok');
      }, error => this.snack.open(error, '😖 Esta bien'));

      this.router.navigate(['/']);
    });
  }


}
