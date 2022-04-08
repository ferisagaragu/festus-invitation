import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pesosFormat } from '../../../core/formats/pesos.format';
import { EventService } from '../../../core/http/event.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit {

  form: FormGroup;
  todayDateBlock: Date;
  pesosMask: any;
  load: boolean;
  loadUpdate: boolean;
  uuid: string;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private eventServer: EventService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.pesosMask = pesosFormat;
    this.uuid = this.activatedRoute.snapshot.params?.uuid;
    this.todayDateBlock = new Date();
  }

  ngOnInit(): void {
    this.createForm();
  }

  save() {
    if (this.form.invalid) return;
    this.load = true;
    this.form.disable();

    if (!this.uuid) {
      this.eventServer.createEvent(this.form.value).subscribe(_ => {
        this.router.navigate(['/']);
      }, error => {
        this.form.enable();
        this.load = false;
        this.error = error;
      });
    } else {
      this.eventServer.updateEvent(this.uuid, {
        ...this.form.value
      }).subscribe(_ => {
        this.router.navigate(['/']);
      }, error => {
        this.form.enable();
        this.load = false;
        this.error = error;
      });
    }
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      firstCoupleName: ['', Validators.required],
      secondCoupleName: ['', Validators.required],
      primaryColor: ['#EABE3F'],
      secondaryColor: ['#5e2129'],
      endDate: [null, Validators.required],
      eventDate: [null, Validators.required],
      price: ['', Validators.required],
      customTicket: [false],
      description: [''],
      providerUrl: [''],
      providerType: [''],
      endPointInvitation: ['']
    });

    if (this.uuid) {
      this.loadUpdate = true;

      this.eventServer.findAllEvents(this.uuid).subscribe(resp => {
        this.form.reset(resp);
        this.loadUpdate = false;
      }, error => {
        this.error = error;
        this.loadUpdate = false;
      });
    }
  }

}
