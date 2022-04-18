import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent {

  indexTab: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.indexTab = this.activatedRoute.snapshot.params?.indexTab;
  }

  changePath(event: number) {
    this.router.navigate(['event/view', `${event}`]);
  }

}
