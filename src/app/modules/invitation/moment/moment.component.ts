import { Component, Input } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { MatDialog } from "@angular/material/dialog";
import { DialogPhotoComponent } from "../dialog-photo/dialog-photo.component";

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent {

  @Input() lang: string;
  logo = environment.logo;
  type = environment.type;
  carouselCount: number = environment.carouselCount;
  gallery: boolean = environment.gallery;
  carouselCountIndex: Array<number>;

  galleryRowOne: Array<number>;
  galleryRowTwo: Array<number>;

  constructor(private dialog: MatDialog) {
    this.carouselCountIndex = Array(environment.carouselCount)
      .fill(0).map((x, i)=> i++);
    this.galleryRowOne = Array(environment.carouselRowOne).fill(0).map((x, i)=> (i++) + 1);
    this.galleryRowTwo = Array(environment.carouselRowTwo).fill(0).map((x, i)=> (i++) + environment.carouselRowOne + 1);
  }

  onClick(event: any) {
    this.dialog.open(
      DialogPhotoComponent,
      {
        data: event
      }
    );
  }

}
