import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/http/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide: boolean;
  load: boolean;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.hide = true;
    this.load = false;
  }

  ngOnInit(): void {
    this.createForm();
  }

  signIn(): void {
    if (this.form.invalid) {
      return;
    }

    this.load = true;
    this.form.disable();

    this.authService.signIn(
      this.form.value
    ).subscribe(resp => {
      //resp
      this.load = false;
      this.form.enable();
    }, ({ error }) => {
      this.load = false;
      this.form.enable();

      if (error.fieldNameError === 'userName')
        this.form.get(error.fieldNameError)
          .setErrors({ server: error.message });

      if (error.fieldNameError === 'password')
        this.form.get(error.fieldNameError)
          .setErrors({ server: error.message });
    });

  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
