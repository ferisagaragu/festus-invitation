import { Component, Input } from '@angular/core';
import { carouselAdviceData } from '../../../core/data/carousel-advice.data';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent {

  @Input() lang: string;
  carouselAdvices = carouselAdviceData;
  largeAdvice = environment.largeAdvice;

  sendMessageJ() {
    const link = document.createElement('a');
    link.href = 'https://wa.link/z9eaa3';
    link.click();
  }

  sendMessageR() {
    const link = document.createElement('a');
    link.href = 'https://wa.link/hpvvj9';
    link.click();
  }

}
