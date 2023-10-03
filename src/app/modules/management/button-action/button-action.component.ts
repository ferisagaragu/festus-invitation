import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit {

  @Input() disabledPlus: boolean;
  @Input() disabled: boolean;

  @Output() remove: EventEmitter<void>;

  constructor() {
    this.disabledPlus = false;
    this.disabled = false;
    this.remove = new EventEmitter<void>();
  }

  ngOnInit(): void { }

  onRemove() {
    this.remove.emit();
  }

}
