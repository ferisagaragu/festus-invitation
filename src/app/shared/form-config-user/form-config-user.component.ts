import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from 'ng-urxnium';
import { UserModel } from '../../core/models/user.model';
import { UserService } from '../../core/http/user.service';

@Component({
  selector: 'app-form-config-user',
  templateUrl: './form-config-user.component.html',
  styleUrls: ['./form-config-user.component.scss']
})
export class FormConfigUserComponent implements OnInit {

  form: FormGroup;
  user: UserModel;
  error: string;
  load: boolean;

  constructor(
    @Inject('location') public location: Location,
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private userService: UserService
  ) {
    this.user = this.sessionService.getUser();
  }

  ngOnInit(): void {
    this.createForm();
  }

  save(): void {
    if (this.form.invalid) return;
    this.error = null;
    this.load = true;
    this.form.disable();

    this.userService.updateUser({
      uuid: this.user.uuid,
      ...this.form.value,
      photo: this.getPhotoUrl()
    }).subscribe(_ => {
      this.load = false;
      this.location.reload();
    }, error => {
      this.error = error;
      this.form.enable();
    });
  }

  getPhotoUrl(): string {
    const first = this.user.name.charAt(0);
    const second = this.user.surname.charAt(0);
    const finalFirst = this.form.value.name.charAt(0);
    const secondFirst = this.form.value.surname.charAt(0);

    return this.form.value.photo.replace(
      `/${first}${second}/`,
      `/${finalFirst}${secondFirst}/`
    );
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      photo: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      motherSurname: ['', Validators.required]
    });

    this.form.reset(this.user);
  }

}
