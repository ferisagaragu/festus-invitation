import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  @ViewChild("audioPlayer") audioPlayer: HTMLAudioElement | any;
  @Output() open: EventEmitter<void>;

  envelopeOpen: boolean;
  envelopeColor = environment.envelopeColor;
  initials = environment.initials;
  musicUrl: string;

  constructor() {
    this.envelopeOpen = false;
    this.open = new EventEmitter<void>();
    this.musicUrl = environment.songUrl;
  }

  onOpen(envelopeLeft: HTMLElement, envelopeRight: HTMLElement, seal: HTMLDivElement): void {
    envelopeLeft?.classList.add('envelope-left-animation');
    envelopeRight?.classList.add('envelope-right-animation');
    seal?.classList.add('seal-animation');
    this.audioPlayer.nativeElement.play();

    setTimeout(() => {
      this.envelopeOpen = true;
      this.open.emit();
    }, 2950)
  }

}
