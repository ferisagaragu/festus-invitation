import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UserService } from '../../core/http/user.service';

@Component({
  selector: 'app-input-user-icon',
  templateUrl: './input-user-icon.component.html',
  styleUrls: ['./input-user-icon.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputUserIconComponent),
      multi: true
    }
  ]
})
export class InputUserIconComponent implements ControlValueAccessor {

  @Input() photo: string;

  isDisabled: boolean;
  onChange = (_: any) => { /*This is intentional*/ }
  onTouch = () => { /*This is intentional*/ }

  userIcon: string;
  loadIcon: boolean;
  reload: boolean;

  constructor(
    private userService: UserService
  ) { }

  writeValue(value: any): void {
    this.userIcon = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  refreshUserIcon(): void {
    this.loadIcon = true;

    this.userService.refreshUserImage().subscribe(resp => {
      this.userIcon = resp;
      this.loadIcon = false;
      this.reload = true;
      this.onChange(resp);
      this.onTouch();
    });
  }

}
