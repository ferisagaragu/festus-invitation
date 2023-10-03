import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-dedication',
  templateUrl: './dedication.component.html',
  styleUrls: ['./dedication.component.scss']
})
export class DedicationComponent implements AfterViewInit {

  @ViewChild('spanDedicatory') spanDedicatory: ElementRef;
  @ViewChild('spanDedicatoryWife') spanDedicatoryWife: ElementRef;
  @ViewChild('spanDedicatoryHusband') spanDedicatoryHusband: ElementRef;
  @Input() lang: string;

  invitationName = environment.invitationName;
  dedicatory = environment.dedicatory;
  dedicatoryWife = environment.dedicatoryWife;
  dedicatoryHusband = environment.dedicatoryHusband;
  dedicatoryWifeTitle = environment.dedicatoryWifeTitle;
  dedicatoryHusbandTitle = environment.dedicatoryHusbandTitle;
  invertNames = environment.invertNames;

  ngAfterViewInit(): void {
    if (this.spanDedicatory) this.spanDedicatory.nativeElement.innerHTML = this.dedicatory;
    if (this.spanDedicatoryWife) this.spanDedicatoryWife.nativeElement.innerHTML = this.dedicatoryWife;
    if (this.spanDedicatoryHusband) this.spanDedicatoryHusband.nativeElement.innerHTML = this.dedicatoryHusband;
  }

}
