import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-photo',
  templateUrl: './dialog-photo.component.html',
  styleUrls: ['./dialog-photo.component.scss']
})
export class DialogPhotoComponent {

  img: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: string
  ) {
    this.img = data;
  }

}
