import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-pre-title',
  templateUrl: './pre-title.component.html',
  styleUrls: ['./pre-title.component.scss']
})
export class PreTitleComponent implements AfterViewInit {

  @ViewChild('spanTitle') spanTitle: ElementRef;
  @Input() lang: string;

  type = environment.type;
  invitationName = environment.invitationName;
  primaryColor = environment.primaryColor;

  ngAfterViewInit(): void {
    if (this.spanTitle) this.spanTitle.nativeElement.innerHTML = environment.title;
  }

}
