import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent implements AfterViewInit {
  @Input() lang: string;
  @ViewChild('spanGifExplication') spanTitle: ElementRef;
  mailRain = environment.mailRain;
  banks = environment.banks;
  gifts = environment.gifts;
  gifExplication = environment.gifExplication;
  type = environment.type;

  ngAfterViewInit(): void {
    if(environment.gifExplication) this.spanTitle.nativeElement.innerHTML = environment.gifExplication;
  }

}
