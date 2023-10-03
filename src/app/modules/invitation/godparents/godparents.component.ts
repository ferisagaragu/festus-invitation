import { Component, Input, ViewChild } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-godparents',
  templateUrl: './godparents.component.html',
  styleUrls: ['./godparents.component.scss']
})
export class GodparentsComponent {

  @ViewChild("godParentsEnd") godParentsEnd: HTMLElement | any;
  @Input() lang: string;

  wake = environment.goodParent.wake;
  wedding = environment.goodParent.wedding;
  ring = environment.goodParent.ring;
  currency = environment.goodParent.currency;
  rosary = environment.goodParent.rosary;
  bible = environment.goodParent.bible;
  flower = environment.goodParent.flower;
  cushion = environment.goodParent.cushion;
  cup = environment.goodParent.cup;
  offerings = environment.goodParent.offerings;
  candle = environment.goodParent.candle;
  parentWife = environment.goodParent.parentWife;
  parentHusband = environment.goodParent.parentHusband;
  onlyParents = environment.onlyParents;
  type = environment.type;
  christ = environment.goodParent.christ;
  virgin = environment.goodParent.virgin;
  medal = environment.goodParent.medal;
  damas = environment.goodParent.damas;
  pajecitos = environment.goodParent.pajecitos;

  onGoToEnd(): void {
    this.godParentsEnd.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

}
