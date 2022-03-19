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
    this.createForm();
  }

  ngOnInit(): void {
  }

  signIn(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value)
    this.load = true;
    this.form.disable();

    this.authService.signIn(
      this.form.value
    ).subscribe(resp => {
      //resp
      this.load = false;
      this.form.enable();
    }, ({ error }) => {
      console.log(error)
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
